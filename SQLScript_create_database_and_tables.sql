CREATE DATABASE  IF NOT EXISTS `competition_system_security_concept_v2_db` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `competition_system_security_concept_v2_db`;
-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: competition_system_security_concept_v2_db
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `file` (
  `file_id` int NOT NULL AUTO_INCREMENT,
  `cloudinary_file_id` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `cloudinary_url` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `design_title` varchar(2000) COLLATE latin1_general_ci NOT NULL,
  `design_description` varchar(2000) COLLATE latin1_general_ci NOT NULL,
  `created_by_id` int DEFAULT NULL,
  PRIMARY KEY (`file_id`)
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file`
--

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file` DISABLE KEYS */;
INSERT INTO `file` VALUES (100,'Design/tmswbgaqsoohmo1e52jy','http://res.cloudinary.com/esde/image/upload/v1623674879/Design/tmswbgaqsoohmo1e52jy.png','rita design 1','rita design 1 description text 1 text 2 text 3 text 4 ...',100),(101,'Design/xexzh8slgmljkeympnxm','http://res.cloudinary.com/esde/image/upload/v1623674880/Design/xexzh8slgmljkeympnxm.png','rita design 2','rita design 2 description text 1 text 2 text 3 text 4 ....',100),(102,'Design/dsvdzljw0eaaskrrfzxx','http://res.cloudinary.com/esde/image/upload/v1623674882/Design/dsvdzljw0eaaskrrfzxx.png','rita design 3','rita design 3 description text 1 text 2 text 3 text 4 ....',100),(103,'Design/rqn3tztq1hcewhicmrxm','http://res.cloudinary.com/esde/image/upload/v1623674883/Design/rqn3tztq1hcewhicmrxm.png','rita design 4','rita design 4 description text 1 text 2 text 3 text 4 ....',100),(104,'Design/hvsvucsrmzroebj69ye8','http://res.cloudinary.com/esde/image/upload/v1623674885/Design/hvsvucsrmzroebj69ye8.png','rita design 5','rita design 5 description text 1 text 2 text 3 text 4 ....',100),(105,'Design/itcxzagxqujzzjhvrmcl','http://res.cloudinary.com/esde/image/upload/v1623674886/Design/itcxzagxqujzzjhvrmcl.png','rita design 6','rita design 6 description text 1 text 2 text 3 text 4 ....',100),(106,'Design/ihxalgtj9o9pw976eeoe','http://res.cloudinary.com/esde/image/upload/v1623674888/Design/ihxalgtj9o9pw976eeoe.png','rita design 7','rita design 7 description text 1 text 2 text 3 text 4 ....',100),(107,'Design/jvbamuptl0szkmtuxdlf','http://res.cloudinary.com/esde/image/upload/v1623674890/Design/jvbamuptl0szkmtuxdlf.png','rita design 8','rita design 8 description text 1 text 2 text 3 text 4 ....',100),(108,'Design/t50mgwcxj3mt9pjl1ajf','http://res.cloudinary.com/esde/image/upload/v1623674891/Design/t50mgwcxj3mt9pjl1ajf.png','rita design 9','rita design 9 description text 1 text 2 text 3 text 4 ....',100),(109,'Design/zdyt81vdzppuecirhfk8','http://res.cloudinary.com/esde/image/upload/v1623674893/Design/zdyt81vdzppuecirhfk8.png','rita design 10','rita design 10 description text 1 text 2 text 3 text 4 ....',100),(110,'Design/dq5xcedfa7pgnddnkdwv','http://res.cloudinary.com/esde/image/upload/v1623674894/Design/dq5xcedfa7pgnddnkdwv.png','rita design 11','rita design 11 description text 1 text 2 text 3 text 4 ....',100),(111,'Design/wg3lu6cmhvhjegupvpkx','http://res.cloudinary.com/esde/image/upload/v1623674896/Design/wg3lu6cmhvhjegupvpkx.png','rita design 12','rita design 12 description text 1 text 2 text 3 text 4 ....',100),(112,'Design/omh7hncndcyguiooastf','http://res.cloudinary.com/esde/image/upload/v1623744649/Design/omh7hncndcyguiooastf.png','<script>alert(\"hey!\");</script>','<script>alert(\"hey!\");</script>',102),(113,'Design/fvhifau4zw3232xk4exh','http://res.cloudinary.com/esde/image/upload/v1623746696/Design/fvhifau4zw3232xk4exh.png','<script>alert(\"you have been hacked!\");</script>','test test',102),(114,'Design/v08zu7rf6ymnmehvagle','http://res.cloudinary.com/esde/image/upload/v1623762790/Design/v08zu7rf6ymnmehvagle.png','<script>alert(\"you have been hacked again!\");</script>','testing persistent xss',102),(115,'Design/ljjfyqbgyb0mrxileb2w','http://res.cloudinary.com/esde/image/upload/v1623933999/Design/ljjfyqbgyb0mrxileb2w.png','<script>alert(\"you have been hacked again and again!\");</script>','adasdasdasdsadasdasd',102),(116,'Design/j9xjpzn84tagmmbbypqs','http://res.cloudinary.com/esde/image/upload/v1624025730/Design/j9xjpzn84tagmmbbypqs.png','normal title','mslkdfmlskdmfl',102),(117,'Design/ys2xouyr1zhjfttbf2e4','http://res.cloudinary.com/esde/image/upload/v1624025793/Design/ys2xouyr1zhjfttbf2e4.png','Oops this was an accident','accident\n',100),(118,'Design/svpopmqgrnntisrlbfpx','http://res.cloudinary.com/esde/image/upload/v1624094537/Design/svpopmqgrnntisrlbfpx.png','normal title','rita rita oh rita',100),(119,'Design/wialhuzvulyxgyseqf93','http://res.cloudinary.com/esde/image/upload/v1624099798/Design/wialhuzvulyxgyseqf93.png','                 a','                                               xd',100),(120,'Design/yrjm8opncmcfkw6hoapt','http://res.cloudinary.com/esde/image/upload/v1624443575/Design/yrjm8opncmcfkw6hoapt.png','<script>alert(localStorage.getItem(\"token\"));</script>','hehehehehe',100),(121,'Design/idy0bmp02lufeq2brirn','http://res.cloudinary.com/esde/image/upload/v1624696469/Design/idy0bmp02lufeq2brirn.png','Test again 1','Give me an A',100),(122,'Design/nnjnsorqiyuksw6siqwr','http://res.cloudinary.com/esde/image/upload/v1624701074/Design/nnjnsorqiyuksw6siqwr.png','overused image','double checking',100),(123,'Design/eggbktwwgwy7tjbeefez','http://res.cloudinary.com/esde/image/upload/v1624701152/Design/eggbktwwgwy7tjbeefez.png','overused image','double checking',100);
/*!40000 ALTER TABLE `file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_attempt`
--

DROP TABLE IF EXISTS `login_attempt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_attempt` (
  `attempt_id` int NOT NULL AUTO_INCREMENT,
  `fk_userid` int NOT NULL,
  `attempt_timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`attempt_id`),
  UNIQUE KEY `attempt_id_UNIQUE` (`attempt_id`),
  KEY `FK_loginattempt_userid_idx` (`fk_userid`),
  CONSTRAINT `FK_loginattempt_userid` FOREIGN KEY (`fk_userid`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=292 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_attempt`
--

LOCK TABLES `login_attempt` WRITE;
/*!40000 ALTER TABLE `login_attempt` DISABLE KEYS */;
INSERT INTO `login_attempt` VALUES (1,100,'2021-06-19 07:18:58'),(2,102,'2021-06-19 07:45:21'),(3,101,'2021-06-19 07:57:25'),(4,101,'2021-06-19 08:31:04'),(5,101,'2021-06-19 08:34:00'),(6,101,'2021-06-19 08:34:00'),(7,101,'2021-06-19 08:35:09'),(8,101,'2021-06-19 08:36:35'),(9,100,'2021-06-19 09:11:52'),(10,100,'2021-06-19 09:11:52'),(11,101,'2021-06-19 09:24:55'),(12,101,'2021-06-19 09:26:24'),(13,102,'2021-06-19 09:26:37'),(14,102,'2021-06-19 09:26:41'),(15,101,'2021-06-19 10:45:53'),(16,100,'2021-06-19 10:47:55'),(17,101,'2021-06-19 10:51:50'),(18,101,'2021-06-19 10:51:54'),(19,101,'2021-06-19 10:52:43'),(20,101,'2021-06-19 10:54:50'),(21,101,'2021-06-19 10:55:32'),(22,101,'2021-06-19 10:55:41'),(23,101,'2021-06-19 10:56:21'),(24,101,'2021-06-19 10:57:48'),(25,101,'2021-06-19 10:58:10'),(26,100,'2021-06-19 10:58:57'),(27,100,'2021-06-19 11:06:51'),(28,100,'2021-06-19 11:06:56'),(29,100,'2021-06-19 11:06:57'),(30,100,'2021-06-19 11:06:57'),(31,100,'2021-06-19 11:06:58'),(32,100,'2021-06-19 11:07:21'),(33,100,'2021-06-19 11:07:22'),(34,100,'2021-06-19 11:07:23'),(35,100,'2021-06-19 11:07:24'),(36,100,'2021-06-19 11:07:29'),(37,100,'2021-06-19 11:07:30'),(38,100,'2021-06-19 11:07:31'),(39,100,'2021-06-19 11:07:32'),(40,100,'2021-06-19 11:07:32'),(41,100,'2021-06-19 11:07:34'),(42,102,'2021-06-19 11:17:42'),(43,102,'2021-06-19 11:19:49'),(44,102,'2021-06-19 11:20:29'),(45,102,'2021-06-19 11:21:20'),(46,100,'2021-06-19 11:21:32'),(47,100,'2021-06-19 11:22:18'),(48,100,'2021-06-19 11:22:52'),(49,100,'2021-06-19 11:22:58'),(50,100,'2021-06-19 11:23:02'),(51,100,'2021-06-19 11:23:06'),(52,100,'2021-06-19 11:23:10'),(53,100,'2021-06-19 11:23:12'),(54,100,'2021-06-19 11:23:12'),(55,100,'2021-06-19 11:23:12'),(56,100,'2021-06-19 11:23:12'),(57,100,'2021-06-19 11:23:12'),(58,100,'2021-06-19 11:23:13'),(59,100,'2021-06-19 11:23:13'),(60,100,'2021-06-19 11:23:13'),(61,100,'2021-06-19 11:23:13'),(62,100,'2021-06-19 11:23:13'),(63,100,'2021-06-19 11:23:13'),(64,100,'2021-06-19 11:23:14'),(65,100,'2021-06-19 11:23:47'),(66,100,'2021-06-19 11:23:47'),(67,100,'2021-06-19 11:23:47'),(68,100,'2021-06-19 11:23:47'),(69,100,'2021-06-19 11:23:48'),(70,100,'2021-06-19 11:23:48'),(71,100,'2021-06-19 11:23:48'),(72,100,'2021-06-19 11:23:48'),(73,100,'2021-06-19 11:23:48'),(74,100,'2021-06-19 11:23:48'),(75,100,'2021-06-19 11:23:49'),(76,100,'2021-06-19 11:23:49'),(77,100,'2021-06-19 11:23:49'),(78,100,'2021-06-19 11:23:49'),(79,100,'2021-06-19 11:23:49'),(80,100,'2021-06-19 11:23:49'),(81,100,'2021-06-19 11:23:50'),(82,100,'2021-06-19 11:23:50'),(83,100,'2021-06-19 11:23:50'),(84,100,'2021-06-19 11:23:50'),(85,100,'2021-06-19 11:23:50'),(86,100,'2021-06-19 11:23:50'),(87,100,'2021-06-19 11:23:50'),(88,100,'2021-06-19 11:23:51'),(89,100,'2021-06-19 11:23:51'),(90,100,'2021-06-19 11:23:51'),(91,100,'2021-06-19 11:23:51'),(92,100,'2021-06-19 11:23:51'),(93,100,'2021-06-19 11:23:51'),(94,100,'2021-06-19 11:23:52'),(95,100,'2021-06-19 11:23:52'),(96,100,'2021-06-19 11:23:52'),(97,100,'2021-06-19 11:23:52'),(98,101,'2021-06-19 15:06:18'),(99,101,'2021-06-19 15:06:18'),(100,101,'2021-06-19 15:06:24'),(101,101,'2021-06-19 15:08:26'),(102,101,'2021-06-19 15:08:35'),(103,102,'2021-06-19 15:08:50'),(104,102,'2021-06-19 15:10:57'),(105,101,'2021-06-19 15:12:40'),(106,103,'2021-06-19 15:13:21'),(107,101,'2021-06-19 15:40:24'),(108,101,'2021-06-19 15:49:56'),(109,101,'2021-06-19 15:49:57'),(110,101,'2021-06-19 15:49:57'),(111,101,'2021-06-19 15:49:57'),(112,101,'2021-06-19 15:49:58'),(113,101,'2021-06-19 15:49:58'),(114,101,'2021-06-19 15:49:58'),(115,101,'2021-06-19 15:49:58'),(116,101,'2021-06-19 15:49:58'),(117,101,'2021-06-19 15:49:58'),(118,101,'2021-06-19 15:49:59'),(119,101,'2021-06-19 15:49:59'),(120,101,'2021-06-19 15:49:59'),(121,101,'2021-06-19 15:49:59'),(122,101,'2021-06-19 15:49:59'),(123,101,'2021-06-19 15:50:00'),(124,101,'2021-06-19 15:50:00'),(125,101,'2021-06-19 15:50:00'),(126,101,'2021-06-19 15:50:00'),(127,101,'2021-06-19 15:50:00'),(128,101,'2021-06-19 15:50:00'),(129,101,'2021-06-19 15:50:01'),(130,101,'2021-06-19 15:50:01'),(131,101,'2021-06-19 15:50:01'),(132,101,'2021-06-19 15:50:01'),(133,101,'2021-06-19 15:50:01'),(134,101,'2021-06-19 15:50:02'),(135,101,'2021-06-19 15:50:02'),(136,101,'2021-06-19 15:50:02'),(137,101,'2021-06-19 15:50:02'),(138,101,'2021-06-19 15:50:02'),(139,101,'2021-06-19 15:50:02'),(140,101,'2021-06-19 15:50:03'),(141,101,'2021-06-19 15:54:54'),(142,101,'2021-06-19 15:54:54'),(143,101,'2021-06-19 15:54:54'),(144,101,'2021-06-19 15:54:54'),(145,101,'2021-06-19 15:54:54'),(146,101,'2021-06-19 15:54:54'),(147,101,'2021-06-19 15:54:54'),(148,101,'2021-06-19 15:54:54'),(149,101,'2021-06-19 15:54:54'),(150,101,'2021-06-19 15:54:54'),(151,101,'2021-06-19 15:54:54'),(152,101,'2021-06-19 15:54:54'),(153,101,'2021-06-19 15:54:55'),(154,101,'2021-06-19 15:54:55'),(155,101,'2021-06-19 15:54:55'),(156,101,'2021-06-19 15:54:55'),(157,101,'2021-06-19 15:54:55'),(158,101,'2021-06-19 15:54:55'),(159,101,'2021-06-19 15:54:58'),(160,101,'2021-06-19 15:54:58'),(161,101,'2021-06-19 15:54:58'),(162,101,'2021-06-19 15:54:58'),(163,101,'2021-06-19 15:54:58'),(164,101,'2021-06-19 15:54:59'),(165,101,'2021-06-19 15:54:59'),(166,101,'2021-06-19 15:54:59'),(167,101,'2021-06-19 15:54:59'),(168,101,'2021-06-19 15:54:59'),(169,101,'2021-06-19 15:54:59'),(170,101,'2021-06-19 15:55:00'),(171,101,'2021-06-19 15:55:00'),(172,101,'2021-06-19 15:55:00'),(173,101,'2021-06-19 15:55:00'),(174,101,'2021-06-19 15:56:52'),(175,101,'2021-06-19 15:56:52'),(176,101,'2021-06-19 15:56:52'),(177,101,'2021-06-19 15:56:52'),(178,101,'2021-06-19 15:56:52'),(179,101,'2021-06-19 15:56:52'),(180,101,'2021-06-19 15:56:52'),(181,101,'2021-06-19 15:56:52'),(182,101,'2021-06-19 15:56:52'),(183,101,'2021-06-19 15:56:52'),(184,101,'2021-06-19 15:56:52'),(185,101,'2021-06-19 15:56:52'),(186,101,'2021-06-19 15:56:53'),(187,101,'2021-06-19 15:56:53'),(188,101,'2021-06-19 15:56:53'),(189,101,'2021-06-19 15:56:53'),(190,101,'2021-06-19 15:56:53'),(191,101,'2021-06-19 15:56:53'),(192,101,'2021-06-19 15:56:54'),(193,101,'2021-06-19 15:56:54'),(194,101,'2021-06-19 15:56:54'),(195,101,'2021-06-19 15:56:54'),(196,101,'2021-06-19 15:56:54'),(197,101,'2021-06-19 15:56:54'),(198,101,'2021-06-19 15:56:54'),(199,101,'2021-06-19 15:56:54'),(200,101,'2021-06-19 15:56:54'),(201,101,'2021-06-19 15:56:54'),(202,101,'2021-06-19 15:56:54'),(203,101,'2021-06-19 15:56:54'),(204,101,'2021-06-19 15:56:55'),(205,101,'2021-06-19 15:56:55'),(206,101,'2021-06-19 15:56:55'),(207,101,'2021-06-19 15:56:55'),(208,101,'2021-06-19 16:06:36'),(209,100,'2021-06-19 16:06:47'),(210,100,'2021-06-19 16:09:10'),(211,100,'2021-06-19 16:10:15'),(212,100,'2021-06-19 16:10:54'),(213,100,'2021-06-19 16:13:02'),(214,100,'2021-06-19 16:13:23'),(215,100,'2021-06-19 16:13:58'),(216,100,'2021-06-19 16:16:04'),(217,100,'2021-06-19 16:17:45'),(218,100,'2021-06-19 16:19:02'),(219,100,'2021-06-20 06:44:51'),(220,100,'2021-06-20 06:44:58'),(221,100,'2021-06-20 06:47:33'),(222,100,'2021-06-20 06:48:00'),(223,100,'2021-06-20 06:49:12'),(224,100,'2021-06-20 06:50:00'),(225,100,'2021-06-22 06:55:51'),(226,102,'2021-06-22 06:56:07'),(227,101,'2021-06-22 07:29:51'),(228,102,'2021-06-22 07:33:52'),(229,100,'2021-06-22 07:36:34'),(230,100,'2021-06-22 07:41:30'),(231,102,'2021-06-22 07:47:53'),(232,100,'2021-06-23 03:20:17'),(233,100,'2021-06-23 03:23:19'),(234,100,'2021-06-23 03:23:31'),(235,100,'2021-06-23 03:23:31'),(236,100,'2021-06-23 08:03:30'),(237,100,'2021-06-23 08:50:03'),(238,100,'2021-06-23 08:58:29'),(239,100,'2021-06-23 08:59:04'),(240,100,'2021-06-23 08:59:34'),(241,100,'2021-06-23 09:02:48'),(242,100,'2021-06-23 09:03:31'),(243,100,'2021-06-23 09:05:37'),(244,100,'2021-06-23 09:07:33'),(245,100,'2021-06-23 09:18:06'),(246,102,'2021-06-23 09:21:07'),(247,100,'2021-06-23 09:25:40'),(248,100,'2021-06-23 09:27:51'),(249,100,'2021-06-23 09:28:46'),(250,100,'2021-06-23 09:28:51'),(251,101,'2021-06-23 09:31:17'),(252,100,'2021-06-23 09:31:35'),(253,100,'2021-06-23 09:31:53'),(254,100,'2021-06-23 09:36:03'),(255,100,'2021-06-23 09:37:41'),(256,100,'2021-06-23 09:38:05'),(257,100,'2021-06-23 09:38:46'),(258,100,'2021-06-23 09:39:02'),(259,102,'2021-06-23 09:40:09'),(260,100,'2021-06-23 09:41:44'),(261,101,'2021-06-23 09:43:57'),(262,100,'2021-06-23 09:44:39'),(263,100,'2021-06-23 09:46:52'),(264,100,'2021-06-23 15:22:13'),(265,100,'2021-06-23 15:29:31'),(266,100,'2021-06-24 04:42:09'),(267,100,'2021-06-24 04:45:32'),(268,100,'2021-06-24 06:59:39'),(269,100,'2021-06-24 07:10:56'),(270,100,'2021-06-24 07:13:13'),(271,100,'2021-06-24 07:13:14'),(272,100,'2021-06-24 07:21:54'),(273,100,'2021-06-24 07:22:34'),(274,100,'2021-06-24 07:37:36'),(275,100,'2021-06-24 08:16:32'),(276,100,'2021-06-24 08:21:44'),(277,100,'2021-06-24 08:44:09'),(278,100,'2021-06-24 08:55:57'),(279,100,'2021-06-24 13:08:19'),(280,100,'2021-06-24 14:40:12'),(281,100,'2021-06-24 14:43:40'),(282,101,'2021-06-25 14:35:23'),(283,100,'2021-06-26 08:31:54'),(284,101,'2021-06-26 08:39:47'),(285,100,'2021-06-26 08:40:09'),(286,100,'2021-06-26 09:30:21'),(287,101,'2021-06-26 09:30:35'),(288,100,'2021-06-26 09:32:04'),(289,101,'2021-06-26 09:38:58'),(290,100,'2021-06-26 09:49:06'),(291,100,'2021-06-26 09:49:10');
/*!40000 ALTER TABLE `login_attempt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `role_name` (`role_name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `submission_attempt`
--

DROP TABLE IF EXISTS `submission_attempt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `submission_attempt` (
  `submission_attempt_id` int NOT NULL AUTO_INCREMENT,
  `fk_userid` int NOT NULL,
  `submission_timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`submission_attempt_id`),
  UNIQUE KEY `submission_attempt_id_UNIQUE` (`submission_attempt_id`),
  KEY `fk_submissionAttempt_userId_idx` (`fk_userid`),
  CONSTRAINT `fk_submissionAttempt_userId` FOREIGN KEY (`fk_userid`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `submission_attempt`
--

LOCK TABLES `submission_attempt` WRITE;
/*!40000 ALTER TABLE `submission_attempt` DISABLE KEYS */;
INSERT INTO `submission_attempt` VALUES (1,100,'2021-06-26 08:32:30'),(2,100,'2021-06-26 08:34:26'),(3,100,'2021-06-26 09:51:11'),(4,100,'2021-06-26 09:51:15'),(5,100,'2021-06-26 09:52:29');
/*!40000 ALTER TABLE `submission_attempt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `email` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `user_password` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (100,'rita','rita@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(101,'robert','robert@admin.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',1),(102,'bob','bob@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(103,'braddy','braddy@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(104,'josh','josh@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(105,'john','john@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(106,'fred','fred@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(107,'ashley','ashley@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(108,'amy','amy@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(109,'anita','anita@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(110,'eddy','eddy@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(111,'larry','larry@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(112,'ahtan','ahtan@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(113,'joe','joe@admin.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(114,'gabby','gabby@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-27  1:40:46
