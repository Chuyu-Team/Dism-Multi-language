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
        array(
            //PDO::MYSQL_ATTR_SSL_KEY => '/path/to/client-key.pem',
            //PDO::MYSQL_ATTR_SSL_CERT => '/path/to/client-cert.pem',
            //PDO::MYSQL_ATTR_SSL_CA => '/path/to/ca-cert.pem',
            //PDO::ATTR_PERSISTENT => true,
        )
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
$sql = "insert into client_info (id, architect, clientguid, osversion, dismversion, ulltotalphys, dwnumberofprocessors, languageid, editionid, lasttime) values (default, :architect, :clientguid, :osversion, :dismversion, :ulltotalphys, :dwnumberofprocessors, :languageid, :editionid, default) ON DUPLICATE KEY UPDATE architect = :architect, clientguid = :clientguid, osversion = :osversion, dismversion = :dismversion, ulltotalphys = :ulltotalphys, dwnumberofprocessors = :dwnumberofprocessors, languageid = :languageid, editionid = :editionid, lasttime = :lasttime";
foreach($values as $node) {
    if($node['type'] == 'complete' && $node['level'] == 2) {
        switch($node['tag']){
            case 'ARCHITECT':
            $data[':architect'] = hexdec($node['value']);
            break;
            case 'CLIENTGUID':
            $data[':clientguid'] = $node['value'];
            break;
            case 'OSVERSION':
            $data[':osversion'] = hexdec($node['value']);
            break;
            case 'DISMVERSION':
            $data[':dismversion'] = hexdec($node['value']);
            break;
            case 'ULLTOTALPHYS':
            $data[':ulltotalphys'] = hexdec($node['value']);
            break;
            case 'DWNUMBEROFPROCESSORS':
            $data[':dwnumberofprocessors'] = hexdec($node['value']);
            break;
            case 'LANGUAGEID':
            $data[':languageid'] = hexdec($node['value']);
            break;
            case 'EDITIONID':
            $data[':editionid'] = $node['value'];
            break;
            default:
            break;
        }
    }
}
try{
    $data[':lasttime'] = date("Y-m-d H:i:s");
    $pdo->prepare($sql)->execute($data);
}
catch(PDOException $e) {
    die ("Error!: " . $e->getMessage());
}
$pdo = null;