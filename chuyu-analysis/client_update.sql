CREATE DATABASE `chuyu_analysis` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

CREATE TABLE `client_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `architect` smallint(6) NOT NULL,
  `clientguid` varchar(36) NOT NULL,
  `osversion` bigint(20) unsigned NOT NULL,
  `dismversion` bigint(20) unsigned NOT NULL,
  `ulltotalphys` bigint(20) unsigned NOT NULL,
  `dwnumberofprocessors` int(10) unsigned NOT NULL,
  `languageid` smallint(5) unsigned NOT NULL,
  `editionid` varchar(44) NOT NULL,
  `lasttime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `clientguid_UNIQUE` (`clientguid`),
  KEY `architect_INDEX` (`architect`),
  KEY `osversion_INDEX` (`osversion`),
  KEY `dismversion_INDEX` (`dismversion`),
  KEY `ulltotalphys_INDEX` (`ulltotalphys`),
  KEY `dwnumofprocessors_INDEX` (`dwnumberofprocessors`),
  KEY `languageid_INDEX` (`languageid`),
  KEY `editionid_INDEX` (`editionid`),
  KEY `lasttime_INDEX` (`lasttime`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
