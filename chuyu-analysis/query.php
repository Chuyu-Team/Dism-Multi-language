<?php
require_once('./config.php');
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

$postdata = json_decode(file_get_contents('php://input'));
$sql = "select * from `crash_info` where ";
if(isset($postdata->{"clientguid"}) && $postdata->{"clientguid"} != ""){
    $clientguid = $postdata->{"clientguid"};
    $sql = $sql . "`clientguid` like \"%${clientguid}%\" AND ";
}
if(isset($postdata->{"minosversion"}) && $postdata->{"minosversion"} != ""){
    $minosversion = $postdata->{"minosversion"};
    $sql = $sql . "`osversion` >= ${minosversion} AND ";
}
if(isset($postdata->{"maxosversion"}) && $postdata->{"maxosversion"} != ""){
    $maxosversion = $postdata->{"maxosversion"};
    $sql = $sql . "`osversion` <= ${maxosversion} AND ";
}
if(isset($postdata->{"mindismversion"}) && $postdata->{"mindismversion"} != ""){
    $mindismversion = $postdata->{"mindismversion"};
    $sql = $sql . "`dismversion` >= ${mindismversion} AND ";
}
if(isset($postdata->{"maxdismversion"}) && $postdata->{"maxdismversion"} != ""){
    $maxdismversion = $postdata->{"maxdismversion"};
    $sql = $sql . "`dismversion` <= ${maxdismversion} AND ";
}
if(isset($postdata->{"mincrashmoduleversion"}) && $postdata->{"mincrashmoduleversion"} != ""){
    $mincrashmoduleversion = $postdata->{"mincrashmoduleversion"};
    $sql = $sql . "`crashmoduleversion` >= ${mincrashmoduleversion} AND ";
}
if(isset($postdata->{"maxcrashmoduleversion"}) && $postdata->{"maxcrashmoduleversion"} != ""){
    $maxcrashmoduleversion = $postdata->{"maxcrashmoduleversion"};
    $sql = $sql . "`crashmoduleversion` <= ${maxcrashmoduleversion} AND ";
}
if(isset($postdata->{"exceptioncode"}) && $postdata->{"exceptioncode"} != ""){
    $exceptioncode = $postdata->{"exceptioncode"};
    $sql = $sql . "`exceptioncode` = ${exceptioncode} AND ";
}
if(isset($postdata->{"crashmodule"}) && $postdata->{"crashmodule"} != ""){
    $crashmodule = $postdata->{"crashmodule"};
    $sql = $sql . "`crashmodule` like \"%${crashmodule}%\" AND ";
}
if(isset($postdata->{"nobefore"}) && $postdata->{"nobefore"} != ""){
    $nobefore = $postdata->{"nobefore"};
    $nobefore = date("Y-m-d H:i:s", strtotime($nobefore));
    $sql = $sql . "`time` >= \"${nobefore}\" AND ";
}
if(isset($postdata->{"noafter"}) && $postdata->{"noafter"} != ""){
    $noafter = $postdata->{"noafter"};
    $noafter = date("Y-m-d H:i:s", strtotime($noafter));
    $sql = $sql . "`time` <= \"${noafter}\" AND ";
}
$sql = $sql . "1 order by `time` desc";

try{
    $sth = $pdo->prepare($sql);
    $sth->execute();
}
catch(PDOException $e) {
    die ("Error!: " . $e->getMessage());
}
echo json_encode($sth->fetchAll(PDO::FETCH_ASSOC));
$pdo = null;