# 第三方引用列表
此文档用于记录Dism++所使用的第三方库。库的顺序只是说明Dism++使用的先后顺序，并不表示重次。

## DirectUI - UI Library

Written by Bjarke Viksoe (bjarke@viksoe.dk)
Copyright (c) 2006-2007 Bjarke Viksoe.

This code may be used in compiled form in any way you desire. These source files may be redistributed by any means PROVIDING it is not sold for profit without the authors written consent, and providing that this notice and the authors name is included. 

This file is provided "as is" with no expressed or implied warranty. The author accepts no liability if it causes any damage to you or your computer whatsoever. It's free, so don't hassle me about it. Beware of bugs.

## DuiLib

https://github.com/duilib/duilib

Copyright (c) 2010-2011, duilib develop team(https:github.com/duilib/duilib).All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met.

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

## zlib

zlib.h -- interface of the 'zlib' general purpose compression library
 version 1.1.3, July 9th, 1998

 Copyright (C) 1995-1998 Jean-loup Gailly and Mark Adler

 This software is provided 'as-is', without any express or implied  warranty.  In no event will the authors be held liable for any damages  arising from the use of this software.

 Permission is granted to anyone to use this software for any purpose, including commercial applications, and to alter it and redistribute it  freely, subject to the following restrictions:

 1. The origin of this software must not be misrepresented; you must not claim that you wrote the original software. If you use this software in a product, an acknowledgment in the product documentation would be appreciated but is not required.
 2. Altered source versions must be plainly marked as such, and must not be misrepresented as being the original software.
 3. This notice may not be removed or altered from any source distribution.

 Jean-loup Gailly        Mark Adler
 jloup@gzip.org          madler@alumni.caltech.edu


 The data format used by the zlib library is described by RFCs (Request for Comments) 1950 to 1952 in the files ftp:ds.internic.net/rfc/rfc1950.txt (zlib format), rfc1951.txt (deflate format) and rfc1952.txt (gzip format).


    The 'zlib' compression library provides in-memory compression and decompression functions, including integrity checks of the uncompressed data.  This version of the library supports only one compression method (deflation) but other algorithms will be added later and will have the same stream interface.

    Compression can be done in a single step if the buffers are large enough (for example if an input file is mmap'ed), or can be done by repeated calls of the compression function.  In the latter case, the application must provide more input and/or consume the output (providing more output space) before each call.

    The library also supports reading and writing files in gzip (.gz) format with an interface similar to that of stdio.

    The library does not install any signal handler. The decoder checks the consistency of the compressed data, so the library should never crash even in case of corrupted input.

for more info about .ZIP format, see ftp:ftp.cdrom.com/pub/infozip/doc/appnote-970311-iz.zip PkWare has also a specification at ftp:ftp.pkware.com/probdesc.zip

## rapidxml
一个高性能轻量级xml解析引擎。

http://rapidxml.sourceforge.net/

RapidXml is an attempt to create the fastest XML parser possible, while retaining useability, portability and reasonable W3C compatibility. It is an in-situ parser written in modern C++, with parsing speed approaching that of strlen function executed on the same data. 

RapidXml has been around since 2006, and is being used by lots of people. HTC uses it in some of its mobile phones. 

If you are looking for a stable and fast parser, look no further. Integration with your project will be trivial, because entire library is contained in a single header file, and requires no building or configuration. 

Current version is RapidXml 1.13. Also available is its online Manual with a full and detailed reference. You may also like to check Boost.PropertyTree library, which presents a higher level interface, and uses RapidXml as its default XML parser. 

The author of RapidXml is Marcin Kalicinski. 


Copyright � 2006, 2009 Marcin Kalicinski (kalita at poczta dot onet dot pl)


## MsIsoReader

微软的一个开源ISO库，为Dism++提供ISO读取支持。

## minhook

https://github.com/TsudaKageyu/minhook

The Minimalistic x86/x64 API Hooking Library for Windows。

## ms-compress

https://github.com/coderforlife/ms-compress

Open source implementations of Microsoft compression algorithms. The progress is listed below. "RTL" refers to the native RtlCompressBuffer and RtlUncompressBuffer functions from Windows 8's ntdll.dll. Comparisons are made against the max compression engine for RTL functions.