// RCMake.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"
#include<winnt.h>
#include <map>
DWORD Alignment(DWORD Size,DWORD dwAlignment)
{
	auto Tmp = Size%dwAlignment;
	if (Tmp)
	{
		return (Size - Tmp)+ dwAlignment;
	}
	else
	{
		return Size;
	}
}

struct STRINGRESOURCEIMAGE
{
	WORD nLength;
	WCHAR achString[];
};


#define PEFileAlignment 0x200
#define PESectionAlignment 0x00001000

BOOL BuildMessageTable(std::map<DWORD, rapidxml::xml_node<wchar_t>*>& MessageTableMap, CStringA& RsrcData, DWORD EntryIndex);
BOOL BuildStringTable(std::map<WORD, rapidxml::xml_attribute<wchar_t>*>& StringTableMap, CStringA& RsrcData, DWORD EntryIndex);

int _tmain(int argc, _TCHAR* argv[])
{
#ifdef _DEBUG
	auto hFile = CreateFile(/*L"C:\\Windows\\SysWOW64\\zh-CN\\wimgapi.dll.mui"*/
		L"F:\\用户数据\\桌面\\Dism++10.1.17.5B\\Config\\Languages\\zh-Hans.dll", GENERIC_READ, FILE_SHARE_READ|FILE_SHARE_DELETE, NULL, OPEN_EXISTING, 0, 0);
	if (hFile != INVALID_HANDLE_VALUE)
	{
		auto cdFile = GetFileSize(hFile, NULL);
		auto pData = new byte[cdFile];

		ReadFile(hFile, pData, cdFile, &cdFile, NULL);
		CloseHandle(hFile);
	}
#endif
	--argc;
	++argv;

	rapidxml::xml_document<wchar_t> XMLFile;

	rapidxml::XMLCreateXMLDocumentByFile(*argv,&XMLFile);

	//auto hFile = CreateFile(argv[1], GENERIC_WRITE, FILE_SHARE_READ, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, 0);

	//IMAGE_DOS_HEADER DosHeder = {};

	CStringA FileData;

	auto pDosHeder= (IMAGE_DOS_HEADER*)FileData.GetBufferSetLength(sizeof(IMAGE_DOS_HEADER)+sizeof(IMAGE_NT_HEADERS32)+sizeof(IMAGE_SECTION_HEADER));
	memset(pDosHeder,NULL, sizeof(IMAGE_DOS_HEADER) + sizeof(IMAGE_NT_HEADERS32)+sizeof(IMAGE_SECTION_HEADER));
	pDosHeder->e_magic = IMAGE_DOS_SIGNATURE;
	pDosHeder->e_lfanew = sizeof(IMAGE_DOS_HEADER);

	auto pNtHeader= (IMAGE_NT_HEADERS32*)((byte*)pDosHeder + pDosHeder->e_lfanew);

	pNtHeader->Signature = IMAGE_NT_SIGNATURE;
	pNtHeader->FileHeader.Machine = IMAGE_FILE_MACHINE_I386;
	pNtHeader->FileHeader.NumberOfSections = 1;
	pNtHeader->FileHeader.SizeOfOptionalHeader = sizeof(pNtHeader->OptionalHeader);
	pNtHeader->FileHeader.Characteristics = IMAGE_FILE_DLL | IMAGE_FILE_32BIT_MACHINE | IMAGE_FILE_EXECUTABLE_IMAGE;

	pNtHeader->OptionalHeader.Magic = IMAGE_NT_OPTIONAL_HDR32_MAGIC;
	pNtHeader->OptionalHeader.BaseOfCode = 0x1000;
	pNtHeader->OptionalHeader.BaseOfData = 0x1000;
	pNtHeader->OptionalHeader.ImageBase = 0x10000000;
	pNtHeader->OptionalHeader.SectionAlignment = PESectionAlignment;
	pNtHeader->OptionalHeader.FileAlignment = PEFileAlignment;
	pNtHeader->OptionalHeader.SizeOfHeaders = Alignment(pDosHeder->e_lfanew+sizeof(*pNtHeader)+ pNtHeader->FileHeader.NumberOfSections *sizeof(IMAGE_SECTION_HEADER), pNtHeader->OptionalHeader.FileAlignment);
	pNtHeader->OptionalHeader.Subsystem = IMAGE_SUBSYSTEM_WINDOWS_GUI;
	pNtHeader->OptionalHeader.DllCharacteristics = IMAGE_DLLCHARACTERISTICS_DYNAMIC_BASE| IMAGE_DLLCHARACTERISTICS_NX_COMPAT| IMAGE_DLLCHARACTERISTICS_NO_SEH;
	pNtHeader->OptionalHeader.NumberOfRvaAndSizes = IMAGE_NUMBEROF_DIRECTORY_ENTRIES;

	pNtHeader->OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_RESOURCE].VirtualAddress=0x1000;

	auto pFirstSectionHeader = (IMAGE_SECTION_HEADER*)((byte*)pNtHeader + sizeof(*pNtHeader));
	memcpy(pFirstSectionHeader->Name,".rsrc",min(IMAGE_SIZEOF_SHORT_NAME,sizeof(".rsrc")));
	pFirstSectionHeader->VirtualAddress = 0x1000;
	pFirstSectionHeader->Characteristics = IMAGE_SCN_MEM_READ| IMAGE_SCN_CNT_INITIALIZED_DATA;
	pFirstSectionHeader->PointerToRawData = Alignment((byte*)pFirstSectionHeader+sizeof(*pFirstSectionHeader)-(byte*)pDosHeder, pNtHeader->OptionalHeader.FileAlignment);


	//资源节部分
	CStringA RsrcData;
	auto pXMLData=XMLFile.first_node(L"Data",StaticStrLen(L"Data"));

	//建立字符串缓存
	std::map<WORD, rapidxml::xml_attribute<wchar_t>*> StringTableMap;
	if (auto pStringMaps = pXMLData->first_node(L"StringMaps", StaticStrLen(L"StringMaps")))
	{
		for (auto pString = pStringMaps->first_node(L"String", StaticStrLen(L"String")); pString; pString = pString->next_sibling(L"String", StaticStrLen(L"String")))
		{
			auto pLink = pString->first_attribute(L"Link", StaticStrLen(L"Link"));
			if (!pLink)
				continue;

			StringTableMap.insert(std::pair<const WORD, rapidxml::xml_attribute<wchar_t>*>(StringTableMap.size(), pLink));
		}
	}

	//建立消息表缓存
	std::map<DWORD, rapidxml::xml_node<wchar_t>*> MessageTableMap;

	if (auto pMessageTable = pXMLData->first_node(L"MessageTable",StaticStrLen(L"MessageTable")))
	{
		for (auto pMessage = pMessageTable->first_node(); pMessage; pMessage = pMessage->next_sibling())
		{
			if (pMessage->type() != rapidxml::node_element)
			{
				continue;
			}

			MessageTableMap.insert(std::pair<const DWORD, rapidxml::xml_node<wchar_t>*>(_tcstoul(pMessage->name() + 1, NULL, 16), pMessage));
		}
	}

	DWORD NumberOfIdEntries = 0;
	if (StringTableMap.size())
		++NumberOfIdEntries;
	if (MessageTableMap.size())
		++NumberOfIdEntries;


	if (NumberOfIdEntries == 0)
		return 1;

	auto pResourceDir=(IMAGE_RESOURCE_DIRECTORY*)(RsrcData.GetBufferSetLength(sizeof(IMAGE_RESOURCE_DIRECTORY)+sizeof(IMAGE_RESOURCE_DIRECTORY_ENTRY)*NumberOfIdEntries));
	memset(pResourceDir,NULL,sizeof(IMAGE_RESOURCE_DIRECTORY)+sizeof(IMAGE_RESOURCE_DIRECTORY_ENTRY));
	pResourceDir->NumberOfIdEntries = NumberOfIdEntries;
	//DWORD LastDataOffset = sizeof(IMAGE_RESOURCE_DIRECTORY) + sizeof(IMAGE_RESOURCE_DIRECTORY_ENTRY);

	BuildStringTable(StringTableMap, RsrcData,0);

	//构建消息表
	BuildMessageTable(MessageTableMap, RsrcData, 1);


	//更新文件头
	pNtHeader->OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_RESOURCE].Size= RsrcData.GetLength();
	pFirstSectionHeader->SizeOfRawData= Alignment(RsrcData.GetLength(), PEFileAlignment);
	pFirstSectionHeader->Misc.VirtualSize = Alignment(RsrcData.GetLength(), PESectionAlignment);
	pNtHeader->OptionalHeader.SizeOfInitializedData = pFirstSectionHeader->SizeOfRawData;
	pNtHeader->OptionalHeader.SizeOfImage = pFirstSectionHeader->Misc.VirtualSize + pNtHeader->OptionalHeader.BaseOfData;


	//填充文件头的空隙
	{
		auto Length = FileData.GetLength();
		auto cbData = pFirstSectionHeader->PointerToRawData - Length;
		memset(FileData.GetBufferSetLength(pFirstSectionHeader->PointerToRawData)+ Length,NULL, cbData);
	}



	//填充文件节空隙
	{
		auto Length = FileData.GetLength();
		auto LengthSectionHeader = RsrcData.GetLength();
		auto pData=FileData.GetBufferSetLength(Length + pFirstSectionHeader->SizeOfRawData) + Length;
		memcpy(pData, RsrcData, LengthSectionHeader);
		memset(pData + LengthSectionHeader, NULL, FileData.GetLength() - Length - LengthSectionHeader);
	}

	CreateFileByData(argv[1], FileData.GetString(), FileData.GetLength());

    return 0;
}

BOOL BuildStringTable(std::map<WORD, rapidxml::xml_attribute<wchar_t>*>& StringTableMap, CStringA& RsrcData, DWORD EntryIndex)
{
	if (StringTableMap.empty())
		return FALSE;


	auto pResourceDirEntry = (IMAGE_RESOURCE_DIRECTORY_ENTRY*)(RsrcData.GetBuffer() + sizeof(IMAGE_RESOURCE_DIRECTORY)) + EntryIndex;

	auto Length = RsrcData.GetLength();


	//插入StringTable
	pResourceDirEntry->Name = (DWORD)RT_STRING;
	pResourceDirEntry->OffsetToDirectory = Length;
	pResourceDirEntry->DataIsDirectory = 1;


	auto pResourceDir = (IMAGE_RESOURCE_DIRECTORY*)(RsrcData.GetBufferSetLength(Length + sizeof(IMAGE_RESOURCE_DIRECTORY)) + Length);
	Length = RsrcData.GetLength();

	pResourceDir->Characteristics = 0;
	pResourceDir->MajorVersion = 0;
	pResourceDir->MinorVersion = 0;
	pResourceDir->TimeDateStamp = 0;
	pResourceDir->NumberOfNamedEntries = 0;


	CStringA StringResourceEntry;
	DWORD NumberOfIdEntries = 0;

	for (auto pString = StringTableMap.begin();pString != StringTableMap.end();)
	{
		++NumberOfIdEntries;

		auto cbStringResourceEntry = StringResourceEntry.GetLength();

		//插入ID节
		auto pResourceDirEntry = (IMAGE_RESOURCE_DIRECTORY_ENTRY*)(RsrcData.GetBufferSetLength(Length + sizeof(IMAGE_RESOURCE_DIRECTORY_ENTRY)) + Length);
		Length = RsrcData.GetLength();
		pResourceDirEntry->Name = (pString->first >> 4) + 1;
		pResourceDirEntry->OffsetToDirectory = cbStringResourceEntry;
		pResourceDirEntry->DataIsDirectory = 1;


		
		//插入语言节点
		auto pResourceDirEntrLanguage = (IMAGE_RESOURCE_DIRECTORY*)(StringResourceEntry.GetBufferSetLength(cbStringResourceEntry + sizeof(IMAGE_RESOURCE_DIRECTORY) + sizeof(IMAGE_RESOURCE_DIRECTORY_ENTRY)) + cbStringResourceEntry);
		cbStringResourceEntry = StringResourceEntry.GetLength();

		pResourceDirEntrLanguage->Characteristics = 0;
		pResourceDirEntrLanguage->MajorVersion = 0;
		pResourceDirEntrLanguage->MinorVersion = 0;
		pResourceDirEntrLanguage->TimeDateStamp = 0;
		pResourceDirEntrLanguage->NumberOfNamedEntries = 0;
		pResourceDirEntrLanguage->NumberOfIdEntries = 1;


		auto pResourceDirEntryLanguage = (IMAGE_RESOURCE_DIRECTORY_ENTRY*)((byte*)pResourceDirEntrLanguage + sizeof(*pResourceDirEntrLanguage));

		//暂时显示指定为中国
		pResourceDirEntryLanguage->Name = 0x0804;
		pResourceDirEntryLanguage->OffsetToData = cbStringResourceEntry;


		//插入数据节点
		auto pDataEntry = (IMAGE_RESOURCE_DATA_ENTRY*)(StringResourceEntry.GetBufferSetLength(cbStringResourceEntry + sizeof(IMAGE_RESOURCE_DATA_ENTRY)) + cbStringResourceEntry);
		cbStringResourceEntry = StringResourceEntry.GetLength();
		pDataEntry->OffsetToData = 0x1000 + cbStringResourceEntry;
		pDataEntry->CodePage = 0;
		pDataEntry->Reserved = 0;


		CStringA Strings;
		auto cbStrings = Strings.GetLength();

		for (;;)
		{
			auto pStringImage= (STRINGRESOURCEIMAGE*)(Strings.GetBufferSetLength(cbStrings + sizeof(STRINGRESOURCEIMAGE) + (pString->second->value_size() + 1)*sizeof(wchar_t)) + cbStrings);
			cbStrings= Strings.GetLength();

			pStringImage->nLength = pString->second->value_size() + 1;
			memcpy(pStringImage->achString, pString->second->value(), pStringImage->nLength*sizeof(wchar_t));

			++pString;

			if (pString == StringTableMap.end())
				break;

			if (pResourceDirEntry->Id != (pString->first >> 4) + 1)
				break;
		}

		pDataEntry->Size = cbStrings;

		memcpy(StringResourceEntry.GetBufferSetLength(cbStringResourceEntry + cbStrings) + cbStringResourceEntry, Strings, cbStrings);
	}


	//拼接数据
	pResourceDirEntry = (IMAGE_RESOURCE_DIRECTORY_ENTRY*)(RsrcData.GetBuffer() + sizeof(IMAGE_RESOURCE_DIRECTORY)) + EntryIndex;
	pResourceDir = (IMAGE_RESOURCE_DIRECTORY*)(RsrcData.GetBuffer() + pResourceDirEntry->OffsetToDirectory);
	pResourceDir->NumberOfIdEntries = NumberOfIdEntries;

	for (DWORD i = 0;i != NumberOfIdEntries;++i)
	{
		auto pResourceDirEntry = (IMAGE_RESOURCE_DIRECTORY_ENTRY*)((byte*)pResourceDir + sizeof(*pResourceDir) + i*sizeof(IMAGE_RESOURCE_DIRECTORY_ENTRY));

		auto pResourceDirEntryLanguage = (IMAGE_RESOURCE_DIRECTORY_ENTRY*)(StringResourceEntry.GetBuffer() + pResourceDirEntry->OffsetToDirectory+sizeof(IMAGE_RESOURCE_DIRECTORY));
		auto pDataEntry = (IMAGE_RESOURCE_DATA_ENTRY*)(StringResourceEntry.GetBuffer() + pResourceDirEntryLanguage->OffsetToData);

		pDataEntry->OffsetToData += Length;
		pResourceDirEntryLanguage->OffsetToData += Length;
		pResourceDirEntry->OffsetToDirectory += Length;
	}

	memcpy(RsrcData.GetBufferSetLength(Length + StringResourceEntry.GetLength()) + Length, StringResourceEntry, StringResourceEntry.GetLength());

	return TRUE;
}

BOOL BuildMessageTable(std::map<DWORD, rapidxml::xml_node<wchar_t>*>& MessageTableMap, CStringA& RsrcData, DWORD EntryIndex)
{
	if (MessageTableMap.empty())
		return FALSE;

	auto pResourceDirEntry = (IMAGE_RESOURCE_DIRECTORY_ENTRY*)(RsrcData.GetBuffer() + sizeof(IMAGE_RESOURCE_DIRECTORY)) + EntryIndex;

	auto Length = RsrcData.GetLength();


	//插入MessageTable
	pResourceDirEntry->Name = (DWORD)RT_MESSAGETABLE;
	pResourceDirEntry->OffsetToDirectory = Length;
	pResourceDirEntry->DataIsDirectory = 1;
	//LastDataOffset += sizeof(IMAGE_RESOURCE_DIRECTORY) + sizeof(IMAGE_RESOURCE_DIRECTORY_ENTRY);

	//插入节点1
	auto pResourceDirEntrIndex1 = (IMAGE_RESOURCE_DIRECTORY*)(RsrcData.GetBufferSetLength(Length + sizeof(IMAGE_RESOURCE_DIRECTORY) + sizeof(IMAGE_RESOURCE_DIRECTORY_ENTRY)) + Length);
	Length = RsrcData.GetLength();

	pResourceDirEntrIndex1->Characteristics = 0;
	pResourceDirEntrIndex1->MajorVersion = 0;
	pResourceDirEntrIndex1->MinorVersion = 0;
	pResourceDirEntrIndex1->TimeDateStamp = 0;
	pResourceDirEntrIndex1->NumberOfNamedEntries = 0;
	pResourceDirEntrIndex1->NumberOfIdEntries = 1;

	auto pResourceDirEntryID1 = (IMAGE_RESOURCE_DIRECTORY_ENTRY*)((byte*)pResourceDirEntrIndex1 + sizeof(*pResourceDirEntrIndex1));
	pResourceDirEntryID1->Name = 1;
	pResourceDirEntryID1->OffsetToDirectory = Length;
	pResourceDirEntryID1->DataIsDirectory = 1;

	//插入语言节点
	auto pResourceDirEntrLanguage = (IMAGE_RESOURCE_DIRECTORY*)(RsrcData.GetBufferSetLength(Length + sizeof(IMAGE_RESOURCE_DIRECTORY) + sizeof(IMAGE_RESOURCE_DIRECTORY_ENTRY)) + Length);
	Length = RsrcData.GetLength();

	pResourceDirEntrLanguage->Characteristics = 0;
	pResourceDirEntrLanguage->MajorVersion = 0;
	pResourceDirEntrLanguage->MinorVersion = 0;
	pResourceDirEntrLanguage->TimeDateStamp = 0;
	pResourceDirEntrLanguage->NumberOfNamedEntries = 0;
	pResourceDirEntrLanguage->NumberOfIdEntries = 1;

	auto pResourceDirEntryLanguage = (IMAGE_RESOURCE_DIRECTORY_ENTRY*)((byte*)pResourceDirEntrLanguage + sizeof(*pResourceDirEntrLanguage));

	//暂时显示指定为中国
	pResourceDirEntryLanguage->Name = 0x0804;
	pResourceDirEntryLanguage->OffsetToDirectory = Length;
	pResourceDirEntryLanguage->DataIsDirectory = 0;

	//插入数据节点
	auto pDataEntry = (IMAGE_RESOURCE_DATA_ENTRY*)(RsrcData.GetBufferSetLength(Length + sizeof(IMAGE_RESOURCE_DATA_ENTRY)) + Length);
	Length = RsrcData.GetLength();
	pDataEntry->OffsetToData = 0x1000 + Length;
	pDataEntry->CodePage = 0;
	pDataEntry->Reserved = 0;


	CStringA MessageResourceData;
	CStringA MessageResourceEntry;

	auto pData = (MESSAGE_RESOURCE_DATA*)MessageResourceData.GetBufferSetLength(sizeof(DWORD));
	pData->NumberOfBlocks = 0;

	for (auto pItem = MessageTableMap.begin(); pItem != MessageTableMap.end();)
	{
		++pData->NumberOfBlocks;

		Length = MessageResourceData.GetLength();
		pData = (MESSAGE_RESOURCE_DATA*)MessageResourceData.GetBufferSetLength(Length + sizeof(MESSAGE_RESOURCE_BLOCK));
		auto pBlock = (MESSAGE_RESOURCE_BLOCK*)((byte*)pData + Length);

		pBlock->LowId = pBlock->HighId = pItem->first;
		pBlock->OffsetToEntries = MessageResourceEntry.GetLength();

		for (;;)
		{
			Length = MessageResourceEntry.GetLength();

			auto cbData = (pItem->second->value_size() + 3) * sizeof(wchar_t);
			auto pMessageEntry = (MESSAGE_RESOURCE_ENTRY*)(MessageResourceEntry.GetBufferSetLength(Length + cbData) + Length);
			pMessageEntry->Flags = MESSAGE_RESOURCE_UNICODE;
			pMessageEntry->Length = cbData;
			memcpy((wchar_t*)pMessageEntry->Text, pItem->second->value(), cbData - 2 * sizeof(wchar_t));

			++(pBlock->HighId);
			++pItem;
			if (pItem == MessageTableMap.end())
				break;

			if (pBlock->HighId != pItem->first)
				break;
		}
		--(pBlock->HighId);
	}
	pDataEntry->Size = MessageResourceData.GetLength() + MessageResourceEntry.GetLength();
	//修正偏移
	for (int i = 0; i != pData->NumberOfBlocks; ++i)
	{
		pData->Blocks[i].OffsetToEntries += MessageResourceData.GetLength();
	}

	Length = RsrcData.GetLength();
	memcpy(RsrcData.GetBufferSetLength(Length + MessageResourceData.GetLength()) + Length, MessageResourceData.GetString(), MessageResourceData.GetLength());
	//附加字符串数据
	Length = RsrcData.GetLength();
	memcpy(RsrcData.GetBufferSetLength(Length + MessageResourceEntry.GetLength()) + Length, MessageResourceEntry.GetString(), MessageResourceEntry.GetLength());

	return TRUE;
}
