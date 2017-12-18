<?php
$bymodule = "SELECT `crashmodule`, count(`id`) as count FROM `crash_info` where `crashmodule` <> 'NULL' AND `time` BETWEEN NOW() - INTERVAL 30 DAY AND NOW() group by `crashmodule`";
$byosver = "SELECT `osversion`, count(`id`) as count FROM `crash_info` where `time` BETWEEN NOW() - INTERVAL 30 DAY AND NOW() group by `osversion`";
$bydismver = "SELECT `dismversion`, count(`id`) as count FROM `crash_info` where `time` BETWEEN NOW() - INTERVAL 30 DAY AND NOW() group by `dismversion`";
$bymodulever = "SELECT `crashmoduleversion`, count(`id`) as count FROM `crash_info` where `crashmoduleversion` <> 0 AND `time` BETWEEN NOW() - INTERVAL 30 DAY AND NOW() group by `crashmoduleversion`";
$byec = "SELECT `exceptioncode`, count(`id`) as count FROM `crash_info` where `exceptioncode` <> 0 AND `time` BETWEEN NOW() - INTERVAL 30 DAY AND NOW() group by `exceptioncode`";
$byday = "SELECT DATE_FORMAT(time, '%Y-%m-%d') as time, count(`id`) as count FROM `crash_info` where `time` BETWEEN NOW() - INTERVAL 30 DAY AND NOW() group by DATE_FORMAT(time, '%Y-%m-%d')";

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

// $postdata = json_decode(file_get_contents('php://input'));
// if(isset($postdata->{"nobefore"}) && $postdata->{"nobefore"} != ""){
//     $nobefore = $postdata->{"nobefore"};
//     $nobefore = date("Y-m-d H:i:s", strtotime($nobefore));
//     $sql = $sql . "`time` >= \"${nobefore}\" AND ";
// }
// if(isset($postdata->{"noafter"}) && $postdata->{"noafter"} != ""){
//     $noafter = $postdata->{"noafter"};
//     $noafter = date("Y-m-d H:i:s", strtotime($noafter));
//     $sql = $sql . "`time` <= \"${noafter}\" AND ";
// }

try{
    $sth=null;
    switch($_GET['type'])
    {
        case 'day':
            $sth = $pdo->prepare($byday);
            break;
        case 'module':
            $sth = $pdo->prepare($bymodule);
            break;
        case 'osver':
            $sth = $pdo->prepare($byosver);
            break;
        case 'dismver':
            $sth = $pdo->prepare($bydismver);
            break;
        case 'modulever':
            $sth = $pdo->prepare($bymodulever);
            break;
        case 'ec':
            $sth = $pdo->prepare($byec);
            break;
        default:
            $sth = $pdo->prepare($byec);
            break;
}

$sth->execute();
}
catch(PDOException $e) {
    die ("Error!: " . $e->getMessage());
}
echo json_encode($sth->fetchAll(PDO::FETCH_ASSOC));
$pdo = null;