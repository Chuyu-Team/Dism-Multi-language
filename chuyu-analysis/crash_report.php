<?php
require_once('./config.php');
if($_SERVER['HTTP_USER_AGENT'] != "Dism++"){
    die("Denied!");
}
try {
    $pdo = new PDO(
        "mysql:host=${dbhost};dbname=${dbname}",
        "${dbuser}",
        "${dbpass}",
        array()
    );
}
catch(PDOException $e) {
    die ("Error!: " . $e->getMessage());
}

$rawData = file_get_contents('php://input');
$xmlparser = xml_parser_create();
if(xml_parse_into_struct($xmlparser,$rawData,$values) == 0) {
    die("Parse Failed!");
}

$data = array();
$sql = "insert into crash_info (id, clientguid, osversion, dismversion, crashmoduleversion, exceptionoffset, exceptioncode, crashmodule, time) values (default, :clientguid, :osversion, :dismversion, :crashmoduleversion, :exceptionoffset, :exceptioncode, :crashmodule, default)";
foreach($values as $node) {
    if($node['type'] == 'complete' && $node['level'] == 2) {
        switch($node['tag']){
            case 'CLIENTGUID':
            $data[':clientguid'] = $node['value'];
            break;
            case 'OSVERSION':
            $data[':osversion'] = hexdec($node['value']);
            break;
            case 'DISMVERSION':
            $data[':dismversion'] = hexdec($node['value']);
            break;
            case 'CRASHMODULEVERSION':
            $data[':crashmoduleversion'] = hexdec($node['value']);
            break;
            case 'EXCEPTIONOFFSET':
            $data[':exceptionoffset'] = hexdec($node['value']);
            break;
            case 'EXCEPTIONCODE':
            $data[':exceptioncode'] = hexdec($node['value']);
            break;
            case 'CRASHMODULE':
            $data[':crashmodule'] = $node['value'];
            break;
            default:
            break;
        }
    }
}
try{
    $pdo->prepare($sql)->execute($data);
}
catch(PDOException $e) {
    die ("Error!: " . $e->getMessage());
}
$pdo = null;