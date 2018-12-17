CREATE DATABASE  IF NOT EXISTS `pdtserver` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `pdtserver`;
-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pdtserver
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assignedpositions`
--

DROP TABLE IF EXISTS `assignedpositions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `assignedpositions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `position_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `position_id` (`position_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `assignedpositions_ibfk_1` FOREIGN KEY (`position_id`) REFERENCES `positions` (`position_id`),
  CONSTRAINT `assignedpositions_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignedpositions`
--

LOCK TABLES `assignedpositions` WRITE;
/*!40000 ALTER TABLE `assignedpositions` DISABLE KEYS */;
INSERT INTO `assignedpositions` VALUES (1,1,2),(2,2,2),(3,2,3);
/*!40000 ALTER TABLE `assignedpositions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calendardays`
--

DROP TABLE IF EXISTS `calendardays`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `calendardays` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `calendar_date` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=179810 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendardays`
--

LOCK TABLES `calendardays` WRITE;
/*!40000 ALTER TABLE `calendardays` DISABLE KEYS */;
INSERT INTO `calendardays` VALUES (179673,'2018-12-04'),(179674,'2018-12-03'),(179675,'2018-11-29'),(179676,'2018-11-30'),(179677,'2018-12-01'),(179678,'2018-12-02'),(179679,'2019-03-04'),(179680,'2019-03-05'),(179681,'2019-03-06'),(179682,'2019-03-07'),(179683,'2019-03-08'),(179684,'2018-12-06'),(179685,'2019-02-01'),(179686,'2019-01-28'),(179687,'2019-01-29'),(179688,'2019-01-30'),(179689,'2019-01-31'),(179690,'2018-08-26'),(179691,'2018-10-04'),(179692,'2018-11-21'),(179693,'2018-11-22'),(179694,'2018-11-23'),(179695,'2018-11-24'),(179696,'2018-11-25'),(179697,'2018-11-19'),(179698,'2018-11-18'),(179699,'2018-11-17'),(179700,'2018-11-16'),(179701,'2018-11-15'),(179702,'2018-11-11'),(179703,'2018-11-09'),(179704,'2018-11-14'),(179705,'2018-11-05'),(179706,'2018-11-04'),(179707,'2018-11-03'),(179708,'2018-11-02'),(179709,'2018-10-28'),(179710,'2018-08-22'),(179711,'2018-10-27'),(179712,'2018-10-26'),(179713,'2018-10-21'),(179714,'2018-10-22'),(179715,'2019-04-30'),(179716,'2019-04-19'),(179717,'2019-04-20'),(179718,'2019-04-21'),(179719,'2019-03-19'),(179720,'2019-03-11'),(179721,'2019-02-13'),(179722,'2019-01-16'),(179723,'2019-01-09'),(179724,'2018-10-20'),(179725,'2018-10-31'),(179726,'2018-10-17'),(179727,'2018-10-16'),(179728,'2018-10-13'),(179729,'2018-10-11'),(179730,'2018-10-12'),(179731,'2018-10-14'),(179732,'2018-10-08'),(179733,'2018-10-05'),(179734,'2018-10-02'),(179735,'2018-09-24'),(179736,'2018-09-25'),(179737,'2018-09-26'),(179738,'2018-09-27'),(179739,'2018-09-28'),(179740,'2018-09-29'),(179741,'2018-08-27'),(179742,'2018-09-22'),(179743,'2018-09-20'),(179744,'2018-09-18'),(179745,'2018-09-17'),(179746,'2018-09-15'),(179747,'2018-09-09'),(179748,'2018-09-08'),(179749,'2018-09-07'),(179750,'2018-09-03'),(179751,'2018-09-01'),(179752,'2018-08-31'),(179753,'2018-09-02'),(179754,'2018-09-04'),(179755,'2018-09-05'),(179756,'2018-09-06'),(179757,'2018-08-20'),(179758,'2018-08-17'),(179759,'2018-08-18'),(179760,'2018-08-19'),(179761,'2018-07-01'),(179762,'2018-05-14'),(179763,'2018-05-13'),(179764,'2018-05-12'),(179765,'2018-05-11'),(179766,'2018-05-10'),(179767,'2018-05-09'),(179768,'2018-05-08'),(179769,'2018-05-07'),(179770,'2018-05-06'),(179771,'2018-05-05'),(179772,'2018-05-04'),(179773,'2018-05-03'),(179774,'2018-01-21'),(179775,'2018-04-29'),(179776,'2018-04-28'),(179777,'2018-04-27'),(179778,'2018-03-21'),(179779,'2018-04-21'),(179780,'2018-04-18'),(179781,'2018-04-15'),(179782,'2018-04-12'),(179783,'2018-04-13'),(179784,'2018-04-14'),(179785,'2018-04-06'),(179786,'2018-04-07'),(179787,'2018-04-08'),(179788,'2018-04-01'),(179789,'2018-03-31'),(179790,'2018-03-30'),(179791,'2018-01-25'),(179792,'2018-03-22'),(179793,'2018-03-23'),(179794,'2018-03-24'),(179795,'2018-01-24'),(179796,'2018-03-15'),(179797,'2018-03-10'),(179798,'2018-03-09'),(179799,'2018-03-08'),(179800,'2018-03-07'),(179801,'2018-03-06'),(179802,'2018-03-02'),(179803,'2018-03-01'),(179804,'2018-02-28'),(179805,'2018-02-16'),(179806,'2018-02-23'),(179807,'2018-03-05'),(179808,'2018-01-15'),(179809,'2018-01-11');
/*!40000 ALTER TABLE `calendardays` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calendarevents`
--

DROP TABLE IF EXISTS `calendarevents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `calendarevents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `event_description` text,
  `location` text,
  `start_time` varchar(25) NOT NULL,
  `end_time` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=220684 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendarevents`
--

LOCK TABLES `calendarevents` WRITE;
/*!40000 ALTER TABLE `calendarevents` DISABLE KEYS */;
INSERT INTO `calendarevents` VALUES (220516,'Nash Chapter (Ritual Attire)',NULL,NULL,'2018-12-04 01:30:00+00:00','2018-12-04 03:00:00+00:00'),(220517,'Nash Cantrell LC Visit',NULL,NULL,'2018-12-03','2018-12-03'),(220518,'Mountain Weekend',NULL,NULL,'2018-11-29','2018-11-29'),(220519,'Mountain Weekend',NULL,NULL,'2018-11-30','2018-11-30'),(220520,'Mountain Weekend',NULL,NULL,'2018-12-01','2018-12-01'),(220521,'Mountain Weekend',NULL,NULL,'2018-12-02','2018-12-02'),(220522,'Spring Break 2019',NULL,NULL,'2019-03-04','2019-03-04'),(220523,'Spring Break 2019',NULL,NULL,'2019-03-05','2019-03-05'),(220524,'Spring Break 2019',NULL,NULL,'2019-03-06','2019-03-06'),(220525,'Spring Break 2019',NULL,NULL,'2019-03-07','2019-03-07'),(220526,'Spring Break 2019',NULL,NULL,'2019-03-08','2019-03-08'),(220527,'Exec Transition Meeting',NULL,NULL,'2018-12-06 19:00:00+00:00','2018-12-06 21:00:00+00:00'),(220528,'Spring Bid Day 2019',NULL,NULL,'2019-02-01','2019-02-01'),(220529,'Spring Rush 2019',NULL,NULL,'2019-01-28','2019-01-28'),(220530,'Spring Rush 2019',NULL,NULL,'2019-01-29','2019-01-29'),(220531,'Spring Rush 2019',NULL,NULL,'2019-01-30','2019-01-30'),(220532,'Spring Rush 2019',NULL,NULL,'2019-01-31','2019-01-31'),(220533,'Spring Rush 2019',NULL,NULL,'2019-02-01','2019-02-01'),(220534,'Chapter',NULL,NULL,'2018-08-26 19:00:00-04:00','2018-08-26 20:30:00-04:00'),(220535,'Bible Study (Chaplain)',NULL,NULL,'2018-10-04 18:00:00-04:00','2018-10-04 19:00:00-04:00'),(220536,'Thanksgiving Break',NULL,NULL,'2018-11-21','2018-11-21'),(220537,'Thanksgiving Break',NULL,NULL,'2018-11-22','2018-11-22'),(220538,'Thanksgiving Break',NULL,NULL,'2018-11-23','2018-11-23'),(220539,'Thanksgiving Break',NULL,NULL,'2018-11-24','2018-11-24'),(220540,'Thanksgiving Break',NULL,NULL,'2018-11-25','2018-11-25'),(220541,'Phisgiving (Philanthropy)',NULL,NULL,'2018-11-19','2018-11-19'),(220542,'Last Day to Update Roster',NULL,NULL,'2018-11-19','2018-11-19'),(220543,'Exec Elections',NULL,NULL,'2018-11-18','2018-11-18'),(220544,'Tailgate',NULL,NULL,'2018-11-17','2018-11-17'),(220545,'Post-Initiation Brotherhood Event',NULL,NULL,'2018-11-16','2018-11-16'),(220546,'Family Weekend',NULL,NULL,'2018-11-16','2018-11-16'),(220547,'Family Weekend',NULL,NULL,'2018-11-17','2018-11-17'),(220548,'Eta Class Initiation',NULL,NULL,'2018-11-15','2018-11-15'),(220549,'Webmaster Alpha Release ',NULL,NULL,'2018-11-11','2018-11-11'),(220550,'Buy Alumni Gifts (Alumni Sec)',NULL,NULL,'2018-11-09','2018-11-09'),(220551,'New Event',NULL,NULL,'2018-11-14 14:00:00+00:00','2018-11-14 15:00:00+00:00'),(220552,'Test for app (please dont delete)','Dont delete this, it\'s just for testing. It will be down within a day.\n#55 and #48','Lex Dr \nCharlotte \nNC 28262','2018-11-05 06:00:00+00:00','2018-11-05 07:00:00+00:00'),(220553,'Quaff a Stein Refresher (Chorister)',NULL,NULL,'2018-11-04','2018-11-04'),(220554,'Title IX Program',NULL,NULL,'2018-11-05 00:00:00+00:00','2018-11-05 01:00:00+00:00'),(220555,'Test',NULL,NULL,'2018-11-04 21:00:00+00:00','2018-11-04 22:00:00+00:00'),(220556,'Smores & More (Brotherhood)',NULL,NULL,'2018-11-03','2018-11-03'),(220557,'Highway Cleanup',NULL,NULL,'2018-11-03 19:00:00+00:00','2018-11-03 20:00:00+00:00'),(220558,'Phisgiving Shirt Proof Submission',NULL,NULL,'2018-11-02','2018-11-02'),(220559,'Soup Kitchen (Community Service)',NULL,NULL,'2018-10-28','2018-10-28'),(220560,'IFC Elections',NULL,NULL,'2018-11-11 19:00:00+00:00','2018-11-11 20:00:00+00:00'),(220561,'General Officer Meeting',NULL,'CHHS 122','2018-08-22 21:00:00-04:00','2018-08-22 22:00:00-04:00'),(220562,'Chi Phi Open Pledge Ceremony (Points)',NULL,NULL,'2018-10-28 16:00:00+00:00','2018-10-28 17:00:00+00:00'),(220563,'Tailgate',NULL,NULL,'2018-10-27','2018-10-27'),(220564,'Order Graduation Stoles (Alumni)',NULL,NULL,'2018-10-26','2018-10-26'),(220565,'Chapter Retreat in CHHS 147',NULL,NULL,'2018-10-21 21:00:00+00:00','2018-10-21 23:00:00+00:00'),(220566,'Last Day to Withdraw',NULL,NULL,'2018-10-22','2018-10-22'),(220567,'LDOC Spring',NULL,NULL,'2019-04-30','2019-04-30'),(220568,'Spring Weekend',NULL,NULL,'2019-04-19','2019-04-19'),(220569,'Spring Weekend',NULL,NULL,'2019-04-20','2019-04-20'),(220570,'Spring Weekend',NULL,NULL,'2019-04-21','2019-04-21'),(220571,'Last Day to Withdraw',NULL,NULL,'2019-03-19','2019-03-19'),(220572,'Unsatisfactory Midterm Grades',NULL,NULL,'2019-03-11','2019-03-11'),(220573,'May Graduation Application Deadline',NULL,NULL,'2019-02-13','2019-02-13'),(220574,'Add/Drop Date',NULL,NULL,'2019-01-16','2019-01-16'),(220575,'FDOC 2019',NULL,NULL,'2019-01-09','2019-01-09'),(220576,'ADPI Boot Scootin\' BBQ',NULL,NULL,'2018-10-21 16:00:00+00:00','2018-10-21 19:00:00+00:00'),(220577,'Highway Cleanup',NULL,NULL,'2018-10-20 19:00:00+00:00','2018-10-20 20:00:00+00:00'),(220578,'GI Alpha Chi (Point)',NULL,NULL,'2018-10-20 15:00:00+00:00','2018-10-20 17:00:00+00:00'),(220579,'Big Brothers Big Sisters Event (IFC)',NULL,NULL,'2018-10-20 13:00:00+00:00','2018-10-20 18:00:00+00:00'),(220580,'Cici\'s Contest (Brotherhood)',NULL,NULL,'2018-10-31 21:30:00+00:00','2018-10-31 23:00:00+00:00'),(220581,'Pi Alpha Phi Discussion',NULL,NULL,'2018-10-22 00:00:00+00:00','2018-10-22 01:00:00+00:00'),(220582,'Zeta Tau Alpha BMOC (Points)','Buy a ticket/attend/partiicpate and you will receive points.',NULL,'2018-10-17','2018-10-17'),(220583,'Flag Football Playoff Game',NULL,NULL,'2018-10-16 00:00:00+00:00','2018-10-16 01:00:00+00:00'),(220584,'Tailgate',NULL,NULL,'2018-10-13','2018-10-13'),(220585,'NPHC\'s Stroll Crew (Points)',NULL,NULL,'2018-10-13 00:00:00+00:00','2018-10-13 01:00:00+00:00'),(220586,'Homecoming 2018 with Alpha Chi Omega',NULL,NULL,'2018-10-11','2018-10-11'),(220587,'Homecoming 2018 with Alpha Chi Omega',NULL,NULL,'2018-10-12','2018-10-12'),(220588,'Homecoming 2018 with Alpha Chi Omega',NULL,NULL,'2018-10-13','2018-10-13'),(220589,'Homecoming 2018 with Alpha Chi Omega',NULL,NULL,'2018-10-14','2018-10-14'),(220590,'Unsatisfactory Grade Reports (Midterm)',NULL,NULL,'2018-10-08','2018-10-08'),(220591,'Big/Little Event (Brotherhood)',NULL,NULL,'2018-10-05 01:00:00+00:00','2018-10-05 02:00:00+00:00'),(220592,'Big/Little Reveal',NULL,NULL,'2018-10-05 00:00:00+00:00','2018-10-05 01:00:00+00:00'),(220593,'Bible Study (Chaplain)',NULL,NULL,'2018-11-29 18:00:00-05:00','2018-11-29 19:00:00-05:00'),(220594,'Pi Kappa Phi Bike-a-Thon (Points)','Donate any amount of money and you will receive points.',NULL,'2018-10-02','2018-10-02'),(220595,'National Hazing Prevention Week',NULL,NULL,'2018-09-24','2018-09-24'),(220596,'National Hazing Prevention Week',NULL,NULL,'2018-09-25','2018-09-25'),(220597,'National Hazing Prevention Week',NULL,NULL,'2018-09-26','2018-09-26'),(220598,'National Hazing Prevention Week',NULL,NULL,'2018-09-27','2018-09-27'),(220599,'National Hazing Prevention Week',NULL,NULL,'2018-09-28','2018-09-28'),(220600,'Adopt A Spot',NULL,NULL,'2018-10-05 21:30:00+00:00','2018-10-05 22:30:00+00:00'),(220601,'Highway Cleanup',NULL,NULL,'2018-09-29 20:00:00+00:00','2018-09-29 21:00:00+00:00'),(220602,'Exec Meeting',NULL,NULL,'2018-08-27 20:30:00-04:00','2018-08-27 21:30:00-04:00'),(220603,'ALS Walk with SC Beta (Philanthropy)',NULL,NULL,'2018-09-22','2018-09-22'),(220604,'Adopt a Spot Cleanup (Service)',NULL,NULL,'2018-09-20 21:30:00+00:00','2018-09-20 22:30:00+00:00'),(220605,'All American Pub (Brotherhood)',NULL,NULL,'2018-09-18 22:00:00+00:00','2018-09-18 23:00:00+00:00'),(220606,'December Graduation Application Deadline',NULL,NULL,'2018-09-17 11:00:00+00:00','2018-09-17 21:00:00+00:00'),(220607,'Tailgate',NULL,NULL,'2018-09-15','2018-09-15'),(220608,'Eta Phikeia Class Induction',NULL,NULL,'2018-09-09','2018-09-09'),(220609,'Tailgate',NULL,NULL,'2018-09-08','2018-09-08'),(220610,'Bid Day Fall 2018',NULL,NULL,'2018-09-07','2018-09-07'),(220611,'Labor Day',NULL,NULL,'2018-09-03','2018-09-03'),(220612,'Tailgate',NULL,NULL,'2018-09-01','2018-09-01'),(220613,'Rush Week',NULL,NULL,'2018-08-31','2018-08-31'),(220614,'Rush Week',NULL,NULL,'2018-09-01','2018-09-01'),(220615,'Rush Week',NULL,NULL,'2018-09-02','2018-09-02'),(220616,'Rush Week',NULL,NULL,'2018-09-03','2018-09-03'),(220617,'Rush Week',NULL,NULL,'2018-09-04','2018-09-04'),(220618,'Rush Week',NULL,NULL,'2018-09-05','2018-09-05'),(220619,'Rush Week',NULL,NULL,'2018-09-06','2018-09-06'),(220620,'FDOC Fall 2018',NULL,NULL,'2018-08-20','2018-08-20'),(220621,'Freshman Convocation',NULL,NULL,'2018-08-20 12:00:00+00:00','2018-08-20 21:00:00+00:00'),(220622,'Freshman Move-In',NULL,NULL,'2018-08-17','2018-08-17'),(220623,'Freshman Move-In',NULL,NULL,'2018-08-18','2018-08-18'),(220624,'Freshman Move-In',NULL,NULL,'2018-08-19','2018-08-19'),(220625,'Initiation for Tim',NULL,'Cone 113','2018-08-19 19:30:00+00:00','2018-08-19 21:00:00+00:00'),(220626,'Rush Video Due (Historian)',NULL,NULL,'2018-07-01','2018-07-01'),(220627,'Finals',NULL,NULL,'2018-05-14','2018-05-14'),(220628,'Finals',NULL,NULL,'2018-05-13','2018-05-13'),(220629,'Finals',NULL,NULL,'2018-05-12','2018-05-12'),(220630,'Finals',NULL,NULL,'2018-05-11','2018-05-11'),(220631,'Finals',NULL,NULL,'2018-05-10','2018-05-10'),(220632,'Finals',NULL,NULL,'2018-05-09','2018-05-09'),(220633,'Finals',NULL,NULL,'2018-05-08','2018-05-08'),(220634,'Finals ',NULL,NULL,'2018-05-07','2018-05-07'),(220635,'Finals',NULL,NULL,'2018-05-06','2018-05-06'),(220636,'Finals',NULL,NULL,'2018-05-05','2018-05-05'),(220637,'Finals',NULL,NULL,'2018-05-04','2018-05-04'),(220638,'Finals ',NULL,NULL,'2018-05-03','2018-05-03'),(220639,'Chapter',NULL,'CHHS 159','2018-01-21 19:00:00-05:00','2018-01-21 21:00:00-05:00'),(220640,'General Officers Progress Meeting (Final)',NULL,NULL,'2018-04-29 22:30:00+00:00','2018-04-29 23:30:00+00:00'),(220641,'2nd Annual Battle of the Bats (MANDATORY)',NULL,NULL,'2018-04-28 16:00:00+00:00','2018-04-28 21:00:00+00:00'),(220642,'Phikeia Initiation',NULL,'1049 Rocky River Rd W\nCharlotte, NC, United States','2018-04-27 01:00:00+00:00','2018-04-27 03:00:00+00:00'),(220643,'Exec Board Meeting',NULL,NULL,'2018-03-21 21:30:00-04:00','2018-03-21 23:30:00-04:00'),(220644,'Fall 18 Budget Review',NULL,'CHHS 159','2018-04-29 22:00:00+00:00','2018-04-29 23:00:00+00:00'),(220645,'Spring Game',NULL,NULL,'2018-04-21','2018-04-21'),(220646,'President Retreat',NULL,NULL,'2018-08-17 14:00:00+00:00','2018-08-17 20:00:00+00:00'),(220647,'Pallas Meeting (Closed Meeting)',NULL,'Chhs 290','2018-04-18 02:00:00+00:00','2018-04-18 03:00:00+00:00'),(220648,'Greek Awards',NULL,NULL,'2018-04-15 13:00:00+00:00','2018-04-15 15:00:00+00:00'),(220649,'Greek Week',NULL,NULL,'2018-04-12','2018-04-12'),(220650,'Greek Week',NULL,NULL,'2018-04-13','2018-04-13'),(220651,'Greek Week',NULL,NULL,'2018-04-14','2018-04-14'),(220652,'Greek Week',NULL,NULL,'2018-04-15','2018-04-15'),(220653,'Beach Weekend 2018',NULL,NULL,'2018-04-06','2018-04-06'),(220654,'Beach Weekend 2018',NULL,NULL,'2018-04-07','2018-04-07'),(220655,'Beach Weekend 2018',NULL,NULL,'2018-04-08','2018-04-08'),(220656,'Alumni Induction Ceremony',NULL,NULL,'2018-04-29 16:00:00+00:00','2018-04-29 18:00:00+00:00'),(220657,'Chapter',NULL,NULL,'2018-04-06 01:30:00+00:00','2018-04-06 03:00:00+00:00'),(220658,'General Officers Progress Meeting',NULL,NULL,'2018-01-21 18:30:00-05:00','2018-01-21 19:00:00-05:00'),(220659,'Points Will Be Cut Off and totals will be Final',NULL,NULL,'2018-04-01','2018-04-01'),(220660,'Spring Weekend',NULL,NULL,'2018-03-31 04:30:00+00:00','2018-03-31 05:30:00+00:00'),(220661,'Spring Weekend',NULL,NULL,'2018-03-30 04:30:00+00:00','2018-03-30 05:30:00+00:00'),(220662,'Greek Games',NULL,NULL,'2018-04-13 16:00:00+00:00','2018-04-13 20:00:00+00:00'),(220663,'Bible Study','Bible Study with Brother Conrad. Ask him for more details.',NULL,'2018-01-25 20:00:00-05:00','2018-01-25 22:00:00-05:00'),(220664,'LC Visit','3/21/18 Wednesday -- Exec Meeting with Nash Cantrell\n3/22/18 Thursday -- Ritual Review with Nash Cantrell',NULL,'2018-03-21','2018-03-21'),(220665,'LC Visit','3/21/18 Wednesday -- Exec Meeting with Nash Cantrell\n3/22/18 Thursday -- Ritual Review with Nash Cantrell',NULL,'2018-03-22','2018-03-22'),(220666,'LC Visit','3/21/18 Wednesday -- Exec Meeting with Nash Cantrell\n3/22/18 Thursday -- Ritual Review with Nash Cantrell',NULL,'2018-03-23','2018-03-23'),(220667,'LC Visit','3/21/18 Wednesday -- Exec Meeting with Nash Cantrell\n3/22/18 Thursday -- Ritual Review with Nash Cantrell',NULL,'2018-03-24','2018-03-24'),(220668,'Exec Board Meeting',NULL,NULL,'2018-01-24 21:30:00-05:00','2018-01-24 23:30:00-05:00'),(220669,' Founder\'s Day (Morrison)',NULL,NULL,'2018-03-15','2018-03-15'),(220670,'Spring Break',NULL,NULL,'2018-03-10 05:00:00+00:00','2018-03-10 06:00:00+00:00'),(220671,'Spring Break',NULL,NULL,'2018-03-09 05:00:00+00:00','2018-03-09 06:00:00+00:00'),(220672,'Spring Break',NULL,NULL,'2018-03-08 05:00:00+00:00','2018-03-08 06:00:00+00:00'),(220673,'Spring Break',NULL,NULL,'2018-03-07 05:00:00+00:00','2018-03-07 06:00:00+00:00'),(220674,'Spring Break',NULL,NULL,'2018-03-06 05:30:00+00:00','2018-03-06 06:30:00+00:00'),(220675,'1 Tequila, 2 tecila, 3 tekila, Floor Program w/ Phi Beta Sigma',NULL,'CHHS 134','2018-03-02 00:00:00+00:00','2018-03-02 01:00:00+00:00'),(220676,'Airband Practice',NULL,'North Deck','2018-03-01 01:30:00+00:00','2018-03-01 03:30:00+00:00'),(220677,'Airband Practice',NULL,'North Deck','2018-02-28 01:30:00+00:00','2018-02-28 03:30:00+00:00'),(220678,'Bid Day',NULL,NULL,'2018-02-16','2018-02-16'),(220679,'Jumanji Date Function with Alpha Chi Omega',NULL,NULL,'2018-02-23 01:00:00+00:00','2018-02-23 03:00:00+00:00'),(220680,'Midterm Grades',NULL,NULL,'2018-03-02 05:30:00+00:00','2018-03-02 06:30:00+00:00'),(220681,'Spring Break',NULL,NULL,'2018-03-05 05:00:00+00:00','2018-03-05 06:00:00+00:00'),(220682,'Initiation',NULL,'Cone 111, 113','2018-01-15 00:00:00+00:00','2018-01-15 03:00:00+00:00'),(220683,'Chapter',NULL,'CHHS 161','2018-01-11 02:30:00+00:00','2018-01-11 04:00:00+00:00');
/*!40000 ALTER TABLE `calendarevents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calendareventstodays`
--

DROP TABLE IF EXISTS `calendareventstodays`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `calendareventstodays` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `day_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `day_id` (`day_id`),
  KEY `event_id` (`event_id`),
  CONSTRAINT `calendareventstodays_ibfk_1` FOREIGN KEY (`day_id`) REFERENCES `calendardays` (`id`),
  CONSTRAINT `calendareventstodays_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `calendarevents` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=220684 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendareventstodays`
--

LOCK TABLES `calendareventstodays` WRITE;
/*!40000 ALTER TABLE `calendareventstodays` DISABLE KEYS */;
INSERT INTO `calendareventstodays` VALUES (220516,179673,220516),(220517,179674,220517),(220518,179675,220518),(220519,179676,220519),(220520,179677,220520),(220521,179678,220521),(220522,179679,220522),(220523,179680,220523),(220524,179681,220524),(220525,179682,220525),(220526,179683,220526),(220527,179684,220527),(220528,179685,220528),(220529,179686,220529),(220530,179687,220530),(220531,179688,220531),(220532,179689,220532),(220533,179685,220533),(220534,179690,220534),(220535,179691,220535),(220536,179692,220536),(220537,179693,220537),(220538,179694,220538),(220539,179695,220539),(220540,179696,220540),(220541,179697,220541),(220542,179697,220542),(220543,179698,220543),(220544,179699,220544),(220545,179700,220545),(220546,179700,220546),(220547,179699,220547),(220548,179701,220548),(220549,179702,220549),(220550,179703,220550),(220551,179704,220551),(220552,179705,220552),(220553,179706,220553),(220554,179705,220554),(220555,179706,220555),(220556,179707,220556),(220557,179707,220557),(220558,179708,220558),(220559,179709,220559),(220560,179702,220560),(220561,179710,220561),(220562,179709,220562),(220563,179711,220563),(220564,179712,220564),(220565,179713,220565),(220566,179714,220566),(220567,179715,220567),(220568,179716,220568),(220569,179717,220569),(220570,179718,220570),(220571,179719,220571),(220572,179720,220572),(220573,179721,220573),(220574,179722,220574),(220575,179723,220575),(220576,179713,220576),(220577,179724,220577),(220578,179724,220578),(220579,179724,220579),(220580,179725,220580),(220581,179714,220581),(220582,179726,220582),(220583,179727,220583),(220584,179728,220584),(220585,179728,220585),(220586,179729,220586),(220587,179730,220587),(220588,179728,220588),(220589,179731,220589),(220590,179732,220590),(220591,179733,220591),(220592,179733,220592),(220593,179675,220593),(220594,179734,220594),(220595,179735,220595),(220596,179736,220596),(220597,179737,220597),(220598,179738,220598),(220599,179739,220599),(220600,179733,220600),(220601,179740,220601),(220602,179741,220602),(220603,179742,220603),(220604,179743,220604),(220605,179744,220605),(220606,179745,220606),(220607,179746,220607),(220608,179747,220608),(220609,179748,220609),(220610,179749,220610),(220611,179750,220611),(220612,179751,220612),(220613,179752,220613),(220614,179751,220614),(220615,179753,220615),(220616,179750,220616),(220617,179754,220617),(220618,179755,220618),(220619,179756,220619),(220620,179757,220620),(220621,179757,220621),(220622,179758,220622),(220623,179759,220623),(220624,179760,220624),(220625,179760,220625),(220626,179761,220626),(220627,179762,220627),(220628,179763,220628),(220629,179764,220629),(220630,179765,220630),(220631,179766,220631),(220632,179767,220632),(220633,179768,220633),(220634,179769,220634),(220635,179770,220635),(220636,179771,220636),(220637,179772,220637),(220638,179773,220638),(220639,179774,220639),(220640,179775,220640),(220641,179776,220641),(220642,179777,220642),(220643,179778,220643),(220644,179775,220644),(220645,179779,220645),(220646,179758,220646),(220647,179780,220647),(220648,179781,220648),(220649,179782,220649),(220650,179783,220650),(220651,179784,220651),(220652,179781,220652),(220653,179785,220653),(220654,179786,220654),(220655,179787,220655),(220656,179775,220656),(220657,179785,220657),(220658,179774,220658),(220659,179788,220659),(220660,179789,220660),(220661,179790,220661),(220662,179783,220662),(220663,179791,220663),(220664,179778,220664),(220665,179792,220665),(220666,179793,220666),(220667,179794,220667),(220668,179795,220668),(220669,179796,220669),(220670,179797,220670),(220671,179798,220671),(220672,179799,220672),(220673,179800,220673),(220674,179801,220674),(220675,179802,220675),(220676,179803,220676),(220677,179804,220677),(220678,179805,220678),(220679,179806,220679),(220680,179802,220680),(220681,179807,220681),(220682,179808,220682),(220683,179809,220683);
/*!40000 ALTER TABLE `calendareventstodays` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `devices`
--

DROP TABLE IF EXISTS `devices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `devices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` enum('iOS','Android') NOT NULL,
  `name` varchar(50) NOT NULL,
  `push_token` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `devices`
--

LOCK TABLES `devices` WRITE;
/*!40000 ALTER TABLE `devices` DISABLE KEYS */;
/*!40000 ALTER TABLE `devices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `likes` (
  `like_id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL,
  `post_id` int(11) DEFAULT NULL,
  `comment_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`like_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (2,2,NULL,52,'2018-10-23 23:06:43'),(6,2,NULL,53,'2018-10-23 23:54:53'),(12,1,43,NULL,'2018-11-04 14:28:14'),(16,1,46,NULL,'2018-11-09 03:41:38');
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `positions`
--

DROP TABLE IF EXISTS `positions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `positions` (
  `position_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  PRIMARY KEY (`position_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `positions`
--

LOCK TABLES `positions` WRITE;
/*!40000 ALTER TABLE `positions` DISABLE KEYS */;
INSERT INTO `positions` VALUES (1,'Test'),(2,'Webmaster');
/*!40000 ALTER TABLE `positions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `postcomments`
--

DROP TABLE IF EXISTS `postcomments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `postcomments` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postcomments`
--

LOCK TABLES `postcomments` WRITE;
/*!40000 ALTER TABLE `postcomments` DISABLE KEYS */;
INSERT INTO `postcomments` VALUES (1,1,16,'Eje','2018-08-30 19:17:16'),(2,1,16,'7gc6fc7fc6','2018-08-30 19:20:05'),(3,1,16,'Test','2018-08-30 19:22:42'),(4,1,16,'Teddy 2','2018-08-30 19:23:16'),(5,1,16,'Hi','2018-08-30 19:25:39'),(6,1,16,'Yj','2018-08-30 19:27:10'),(7,1,16,'Byyby','2018-08-30 19:28:35'),(14,1,16,'Jeje','2018-08-30 19:53:57'),(24,1,16,'Clhcohcoyco','2018-08-30 20:04:49'),(57,1,43,'Jsk','2018-11-07 22:14:13'),(60,1,8,'Uguguvyv\n','2018-11-09 00:11:00'),(61,1,8,'Hjj','2018-11-09 00:11:07');
/*!40000 ALTER TABLE `postcomments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL,
  `title` text NOT NULL,
  `content` longtext NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (8,2,'No Title','This is my post ','2018-08-24 21:47:51'),(11,3,'No Title','Ffssd','2018-08-24 22:35:44'),(41,4,'No Title','First post','2018-10-24 00:37:37'),(43,1,'No Title','https://stackoverflow.com/questions/118984/how-can-you-program-if-youre-blind \n\nLinks work too!','2018-11-04 14:09:53'),(44,1,'No Title','Hchchch','2018-11-05 03:54:35'),(46,1,'No Title','  Ubyg','2018-11-09 01:05:19');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `useraccessrequests`
--

DROP TABLE IF EXISTS `useraccessrequests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `useraccessrequests` (
  `user_access_request_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `bond_number` int(11) NOT NULL,
  `email_address` varchar(50) NOT NULL,
  `phone_number` bigint(20) NOT NULL,
  `status` int(11) DEFAULT '0',
  `google_sub_id` varchar(255) NOT NULL,
  `google_picture` varchar(2083) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_access_request_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `useraccessrequests`
--

LOCK TABLES `useraccessrequests` WRITE;
/*!40000 ALTER TABLE `useraccessrequests` DISABLE KEYS */;
INSERT INTO `useraccessrequests` VALUES (5,'Aleksander','Mieczkowski',9595,'alekmieczkowski@gmail.com',95944949,2,'112781351570115562268','https://lh3.googleusercontent.com/-n9YA8Nyi8w8/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaPO8Knn58WKwfDihIct_KRshK_7Sw/s96-c/photo.jpg','2018-08-24 19:51:50'),(6,'Alek','Mieczkowski',25,'amieczko@uncc.edu',6068606683,2,'116338224067403572774','https://lh3.googleusercontent.com/-_N2nnKV0GlI/AAAAAAAAAAI/AAAAAAAAAHA/dhigSlhuCbk/s96-c/photo.jpg','2018-08-24 21:26:15'),(7,'Sean','McDonald',48,'mrseanmcd@gmail.com',4109494787,2,'114222657414074196622','https://lh5.googleusercontent.com/-UTSsBsKvrYo/AAAAAAAAAAI/AAAAAAAAB2I/CJkPKEpGOUM/s96-c/photo.jpg','2018-08-24 22:31:23'),(8,'Alek','mieczkowski',959,'itzzpoizon@gmail.com',91916699,0,'106667856338016994349','https://lh5.googleusercontent.com/-d6CCmxN1Gv0/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaMLgb8lb1MhDqrfench-gpkWcaiTw/s96-c/photo.jpg','2018-08-31 17:04:04'),(9,'Phi Delta Theta','NC Epsilon',1112,'phideltuncc@gmail.com',9396636996,2,'113145113662278067288','https://lh3.googleusercontent.com/-qXhAu_vx7Sg/AAAAAAAAAAI/AAAAAAAABHE/qFBNYzQU62A/s96-c/photo.jpg','2018-10-23 22:47:09'),(24,'Risk Management','PDT UNCC',99,'riskman.pdtuncc@gmail.com',9193603522,2,'113455596123710917167','https://lh3.googleusercontent.com/-lkkspx3I4vk/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbAFe4SJOIgao7f3WI6435E3dvuMlg/s96-c/photo.jpg','2018-11-09 04:17:38'),(25,'Daniel','Hirt',5555,'danielchirt16@gmail.com',5555555555,2,'105382274557056440679','https://lh6.googleusercontent.com/-MlAkaijJARs/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbAU2iDgbvuOnH_ZaqKvvg6wdnYvwQ/s96-c/photo.jpg','2018-11-09 17:53:54'),(26,'Warden','PDT UNCC',8555,'warden.pdtuncc@gmail.com',6194488855,0,'102485910959859714540','https://lh3.googleusercontent.com/-P9FNrpCB9KU/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-jpyLbPadqFUHvfx4pbRSLn9DSOnw/s96-c/photo.jpg','2018-12-03 12:33:05');
/*!40000 ALTER TABLE `useraccessrequests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userdevices`
--

DROP TABLE IF EXISTS `userdevices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `userdevices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `device_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `device_id` (`device_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `userdevices_ibfk_1` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`),
  CONSTRAINT `userdevices_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userdevices`
--

LOCK TABLES `userdevices` WRITE;
/*!40000 ALTER TABLE `userdevices` DISABLE KEYS */;
/*!40000 ALTER TABLE `userdevices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `bond_number` int(11) NOT NULL,
  `email_address` varchar(50) NOT NULL,
  `phone_number` bigint(20) NOT NULL,
  `google_sub_id` varchar(255) NOT NULL,
  `google_picture` varchar(2083) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Aleksander','Mieczkowski',9595,'alekmieczkowski@gmail.com',9193603522,'112781351570115562268','https://lh3.googleusercontent.com/-n9YA8Nyi8w8/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaPO8Knn58WKwfDihIct_KRshK_7Sw/s96-c/photo.jpg','2018-08-24 20:19:43',0),(2,'Alek','Mieczkowski',25,'amieczko@uncc.edu',6068606683,'116338224067403572774','https://lh3.googleusercontent.com/-_N2nnKV0GlI/AAAAAAAAAAI/AAAAAAAAAHA/dhigSlhuCbk/s96-c/photo.jpg','2018-08-24 21:47:12',0),(3,'Sean','McDonald',48,'mrseanmcd@gmail.com',4109494787,'114222657414074196622','https://lh5.googleusercontent.com/-UTSsBsKvrYo/AAAAAAAAAAI/AAAAAAAAB2I/CJkPKEpGOUM/s96-c/photo.jpg','2018-08-24 22:31:37',0),(4,'Phi Delta Theta','NC Epsilon',1112,'phideltuncc@gmail.com',9396636996,'113145113662278067288','https://lh3.googleusercontent.com/-qXhAu_vx7Sg/AAAAAAAAAAI/AAAAAAAABHE/qFBNYzQU62A/s96-c/photo.jpg','2018-10-23 22:48:02',0),(17,'Risk Management','PDT UNCC',99,'riskman.pdtuncc@gmail.com',9193603522,'113455596123710917167','https://lh3.googleusercontent.com/-lkkspx3I4vk/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbAFe4SJOIgao7f3WI6435E3dvuMlg/s96-c/photo.jpg','2018-11-09 04:17:56',0),(18,'Daniel','Hirt',5555,'danielchirt16@gmail.com',5555555555,'105382274557056440679','https://lh6.googleusercontent.com/-MlAkaijJARs/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbAU2iDgbvuOnH_ZaqKvvg6wdnYvwQ/s96-c/photo.jpg','2018-11-09 17:54:06',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'pdtserver'
--
/*!50003 DROP PROCEDURE IF EXISTS `AcceptUserAccessRequestById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `AcceptUserAccessRequestById`(IN in_user_access_request_id INT)
BEGIN
    DECLARE local_first_name VARCHAR(50);
    DECLARE local_last_name VARCHAR(50);
    DECLARE local_email_address VARCHAR(50);
    DECLARE local_google_sub VARCHAR(255);
    DECLARE local_request_status INT;
    DECLARE local_phone_number BIGINT;
    DECLARE local_bond_number INT;
    DECLARE local_google_picture VARCHAR(2063);
    IF ( SELECT EXISTS (SELECT 1 FROM UserAccessRequests WHERE user_access_request_id = in_user_access_request_id) ) THEN
      -- Check if request is already accepted; if so do nothing.
      SELECT first_name, last_name, bond_number, email_address, phone_number, google_sub_id, google_picture, status
      INTO local_first_name, local_last_name, local_bond_number, local_email_address, local_phone_number, local_google_sub, local_google_picture, local_request_status
      FROM UserAccessRequests WHERE user_access_request_id = in_user_access_request_id;

      IF (local_request_status != 2) THEN
        -- Update request to accepted status.
        UPDATE UserAccessRequests SET status=2 WHERE user_access_request_id = in_user_access_request_id;
        -- Create user in database.
        CALL InsertUser(local_first_name, local_last_name, local_bond_number, local_email_address, local_phone_number, local_google_sub, local_google_picture);
        -- Return updated row.
        SELECT * FROM UserAccessRequests WHERE user_access_request_id = in_user_access_request_id;
      ELSE
        SELECT 'Request is already accepted.';
      END IF;
    ELSE
      SELECT 'Could not find user access request with given id.';
    END IF;
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `AddDeviceToUserById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `AddDeviceToUserById`(IN in_user_id INT, IN in_device_id INT)
BEGIN
		IF !( select exists (select 1 from UserDevices where user_id = in_user_id and device_id = in_device_id) ) THEN
			INSERT INTO UserDevices (user_id, device_id) VALUES (in_user_id, in_device_id);
        ELSE
			SELECT 'This device is already assigned to the user.e';
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `AddPositionForUserId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `AddPositionForUserId`(IN in_user_id INT, IN in_position_id INT)
BEGIN
		IF !( select exists (select 1 from AssignedPositions where user_id = in_user_id and position_id = in_position_id) ) THEN
			INSERT INTO AssignedPositions (user_id, position_id) VALUES (in_user_id, in_position_id);
        ELSE
			SELECT 'User is already assigned the position.';
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `AlterUsersTable` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `AlterUsersTable`()
BEGIN
		IF NOT EXISTS( SELECT NULL FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = 'Users' AND table_schema = 'PDTServer' AND column_name = 'is_admin')  THEN
			ALTER TABLE Users ADD COLUMN is_admin BOOLEAN NOT NULL DEFAULT FALSE;
		END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ClearCalendarData` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `ClearCalendarData`()
BEGIN
		DELETE FROM CalendarEventsToDays;
        DELETE FROM CalendarEvents;
        DELETE FROM CalendarDays;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateComment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `CreateComment`(IN create_owner_id INT, IN create_post_id INT, IN create_content TEXT)
BEGIN
    INSERT INTO PostComments(owner_id, post_id, content) VALUES(create_owner_id, create_post_id, create_content);
    SELECT * FROM PostComments WHERE comment_id = LAST_INSERT_ID();
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateDevice` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `CreateDevice`(IN in_platform ENUM('iOS', 'Android'), IN in_device_name VARCHAR(50), IN in_push_token VARCHAR(250))
BEGIN
		INSERT INTO Devices (platform, name, push_token) VALUES (in_platform, in_device_name, in_push_token);
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateEvent` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `CreateEvent`(IN in_title VARCHAR(150), IN in_calendar_date VARCHAR(10), 
				IN in_description TEXT, IN in_location TEXT, IN in_start_time VARCHAR(25), IN in_end_time VARCHAR(25))
BEGIN
		DECLARE local_event_id INT UNSIGNED DEFAULT 1;
        DECLARE local_day_id INT UNSIGNED DEFAULT 1;
        
		INSERT INTO CalendarEvents(title, event_description, location, start_time, end_time) VALUES (in_title, in_description, in_location, in_start_time, in_end_time);
        SET local_event_id = last_insert_id();
        
        IF !(SELECT EXISTS (SELECT 1 FROM CalendarDays WHERE calendar_date = in_calendar_date)) THEN
			INSERT INTO CalendarDays(calendar_date) VALUES (in_calendar_date);
            SET local_day_id = last_insert_id();
        ELSE
			SET local_day_id = (SELECT id FROM CalendarDays WHERE calendar_date = in_calendar_date);
		END IF;
        INSERT INTO CalendarEventsToDays(day_id, event_id) VALUES (local_day_id, local_event_id);
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreatePosition` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `CreatePosition`(IN position_title VARCHAR(30))
BEGIN
	 IF ( select exists (select 1 from Positions where title = position_title) ) THEN
        SELECT 'Position already exists with name provided.';
    ELSE
		INSERT INTO Positions (title) VALUES (position_title);
        SELECT * FROM Positions WHERE position_id = LAST_INSERT_ID();
    END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreatePost` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `CreatePost`(IN create_owner_id INT, IN create_title TEXT, IN create_content LONGTEXT)
BEGIN
    INSERT INTO Posts(owner_id, title, content) VALUES(create_owner_id, create_title, create_content);
    SELECT * FROM Posts WHERE post_id = LAST_INSERT_ID();
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteCommentById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `DeleteCommentById`(IN search_comment_id INT)
BEGIN
    DELETE FROM PostComments WHERE comment_id = search_comment_id;
    DELETE FROM Likes WHERE comment_id = search_comment_id;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeletePostById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `DeletePostById`(IN search_post_id INT)
BEGIN
    DELETE FROM Posts WHERE post_id = search_post_id;
    DELETE FROM Likes WHERE post_id = search_post_id;
    DELETE FROM PostComments WHERE post_id = search_post_id;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DenyUserAccessRequestById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `DenyUserAccessRequestById`(IN in_user_access_request_id INT)
BEGIN
    DECLARE local_request_status INT;
    IF ( SELECT EXISTS (SELECT 1 FROM UserAccessRequests WHERE user_access_request_id = in_user_access_request_id) ) THEN
      SELECT status INTO local_request_status FROM UserAccessRequests WHERE user_access_request_id = in_user_access_request_id;
      -- Make sure request is not already accepted.
      IF (local_request_status != 2) THEN
        -- Update request to accepted status.
        UPDATE UserAccessRequests SET status=1 WHERE user_access_request_id = in_user_access_request_id;
        SELECT * FROM UserAccessRequests WHERE user_access_request_id = in_user_access_request_id;
      ELSE
        SELECT 'Can\'t deny a request that is already accepted.';
      END IF;
    ELSE
      SELECT 'Could not find user access request with given id.';
    END IF;
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DidUserLikeCommentWithId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `DidUserLikeCommentWithId`(IN search_owner_id INT, IN search_comment_id INT)
BEGIN
    SELECT * FROM Likes WHERE owner_id = search_owner_id AND comment_id = search_comment_id;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DidUserLikePostWithId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `DidUserLikePostWithId`(IN search_owner_id INT, IN search_post_id INT)
BEGIN
    SELECT * FROM Likes WHERE owner_id = search_owner_id AND post_id = search_post_id;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllUserAccessRequests` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetAllUserAccessRequests`()
BEGIN
    SELECT * FROM UserAccessRequests;
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllUserAccessRequestsByStatus` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetAllUserAccessRequestsByStatus`(IN search_status INT)
BEGIN
    SELECT * FROM UserAccessRequests WHERE status = search_status;
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllUsers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetAllUsers`()
BEGIN
    SELECT * FROM Users;
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAmountOfLikesForCommentById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetAmountOfLikesForCommentById`(IN search_comment_id INT)
BEGIN
    SELECT COUNT(*) FROM LIKES WHERE comment_id = search_comment_id;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAmountOfLikesForPostById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetAmountOfLikesForPostById`(IN search_post_id INT)
BEGIN
    SELECT COUNT(*) FROM LIKES WHERE post_id = search_post_id;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetCommentById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetCommentById`(IN search_comment_id INT)
BEGIN
    SELECT * FROM PostComments WHERE comment_id = search_comment_id LIMIT 1;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetCommentsForPostId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetCommentsForPostId`(IN search_post_id INT)
BEGIN
    SELECT * FROM PostComments WHERE post_id = search_post_id;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetDeviceById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetDeviceById`(IN in_device_id INT)
BEGIN
		SELECT * FROM Devices WHERE id = in_device_id;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetEventsForCalendarDate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetEventsForCalendarDate`(IN in_calendar_date VARCHAR(10))
BEGIN
		DECLARE local_day_id INT UNSIGNED DEFAULT 1;
		SET local_day_id = (SELECT id FROM CalendarDays WHERE calendar_date = in_calendar_date);
        
		SELECT CalendarEventsToDays.event_id, CalendarEvents.title, CalendarEvents.event_description, CalendarEvents.location, CalendarEvents.start_time, CalendarEvents.end_time FROM CalendarEventsToDays 
        JOIN CalendarEvents ON CalendarEventsToDays.event_id = CalendarEvents.id WHERE CalendarEventsToDays.day_id = local_day_id;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetPositions` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetPositions`()
BEGIN
		SELECT * FROM Positions;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetPositionsForUserId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetPositionsForUserId`(IN in_user_id INT)
BEGIN
		SELECT AssignedPositions.position_id, Positions.title FROM AssignedPositions JOIN Positions 
				ON AssignedPositions.position_id = Positions.position_id WHERE AssignedPositions.user_id = in_user_id;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetPostById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetPostById`(IN search_post_id INT)
BEGIN
    SELECT * FROM Posts WHERE post_id = search_post_id LIMIT 1;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetPosts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetPosts`()
BEGIN
    SELECT * FROM Posts ORDER BY created_at DESC;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUserAccessRequestByGoogleSubId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetUserAccessRequestByGoogleSubId`(IN search_google_sub_id VARCHAR(255))
BEGIN
    SELECT * FROM UserAccessRequests WHERE google_sub_id = search_google_sub_id LIMIT 1;
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUserAccessRequestById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetUserAccessRequestById`(IN search_access_request_id INT)
BEGIN
    SELECT * FROM UserAccessRequests WHERE user_access_request_id = search_access_request_id LIMIT 1;
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUserByGoogleSubId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetUserByGoogleSubId`(IN search_google_sub_id VARCHAR(255))
BEGIN
  SELECT * FROM Users WHERE google_sub_id = search_google_sub_id LIMIT 1;
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUserById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetUserById`(IN search_user_id INT)
BEGIN
  SELECT * FROM Users WHERE user_id = search_user_id LIMIT 1;
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `InsertUser`(IN in_first_name VARCHAR(50), IN in_last_name VARCHAR(50),
    IN in_bond_number INT, IN in_email_address VARCHAR(50), IN in_phone_number BIGINT, IN in_google_sub_id VARCHAR(255),
    IN in_google_picture VARCHAR(2063))
BEGIN
  IF ( select exists (select 1 from Users where in_google_sub_id = google_sub_id) ) THEN
    SELECT 'A user with provided google_sub_id exists.';
  ELSE
    INSERT INTO Users(first_name, last_name, bond_number, email_address, phone_number, google_sub_id, google_picture)
    VALUES(in_first_name, in_last_name, in_bond_number, in_email_address, in_phone_number, in_google_sub_id, in_google_picture);
  END IF;
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUserAccessRequest` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `InsertUserAccessRequest`(IN in_first_name VARCHAR(50), IN in_last_name VARCHAR(50),
IN in_bond_number INT, IN in_email_address VARCHAR(50), IN in_phone_number BIGINT, IN in_google_sub_id VARCHAR(255),
IN in_google_picture VARCHAR(2063))
BEGIN
    IF ( select exists (select 1 from UserAccessRequests where in_google_sub_id = google_sub_id) ) THEN
      SELECT 'A user access request with provided google_sub_id exists.';
    ELSE
      INSERT INTO UserAccessRequests(first_name, last_name, bond_number, email_address, phone_number, google_sub_id, google_picture)
      VALUES(in_first_name, in_last_name, in_bond_number, in_email_address, in_phone_number, in_google_sub_id, in_google_picture);
    END IF;
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `LikeComment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `LikeComment`(IN like_comment_id INT, IN like_owner_id INT)
BEGIN
    IF ( select exists (select 1 from Likes where comment_id = like_comment_id and owner_id = like_owner_id) ) THEN
        SELECT 'A like already exists for this comment.';
    ELSE
        INSERT INTO Likes(comment_id, owner_id) VALUES(like_comment_id, like_owner_id);
        SELECT * FROM Likes WHERE like_id = LAST_INSERT_ID();
    END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `LikePost` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `LikePost`(IN like_post_id INT, IN like_owner_id INT)
BEGIN
    IF ( select exists (select 1 from Likes where post_id = like_post_id and owner_id = like_owner_id) ) THEN
        SELECT 'A like already exists for this post.';
    ELSE
        INSERT INTO Likes(post_id, owner_id) VALUES(like_post_id, like_owner_id);
        SELECT * FROM Likes WHERE like_id = LAST_INSERT_ID();
    END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `RemoveAllPositionsForUserId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `RemoveAllPositionsForUserId`(IN in_user_id INT)
BEGIN
		DELETE FROM AssignedPositions WHERE user_id = in_user_id;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `RemoveDeviceFromUserById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `RemoveDeviceFromUserById`(IN in_user_id INT, IN in_device_id INT)
BEGIN
		DELETE FROM UserDevices WHERE user_id = in_user_id AND device_id = in_device_id;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `RemovePositionById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `RemovePositionById`(IN in_position_id INT)
BEGIN
		SELECT * FROM Positions WHERE position_id = in_position_id;
        DELETE FROM AssignedPositions WHERE position_id = in_position_id;
		DELETE FROM Positions WHERE position_id = in_position_id;
        IF (row_count() <= 0) THEN
			SELECT 'No positions exist with the id given.';
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `RemovePositionForUserId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `RemovePositionForUserId`(IN in_user_id INT, IN in_position_id INT)
BEGIN
		DELETE FROM AssignedPositions WHERE user_id = in_user_id AND position_id = in_position_id;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UnLikeComment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `UnLikeComment`(IN unlike_comment_id INT, IN unlike_owner_id INT)
BEGIN
    DELETE FROM Likes WHERE comment_id = unlike_comment_id AND owner_id = unlike_owner_id;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UnLikePost` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `UnLikePost`(IN unlike_post_id INT, IN unlike_owner_id INT)
BEGIN
    DELETE FROM Likes WHERE post_id = unlike_post_id AND owner_id = unlike_owner_id;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateCommentById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `UpdateCommentById`(IN update_comment_id INT, IN update_content TEXT)
BEGIN
    UPDATE PostComments
    SET
        content = IF(update_content IS NULL OR update_content = '', content, update_content)
    WHERE comment_id = update_comment_id;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdatePostById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `UpdatePostById`(IN update_post_id INT, IN update_title TEXT, IN update_content LONGTEXT)
BEGIN
    UPDATE Posts
    SET
        title = IF(update_title IS NULL OR update_title = '', title, update_title),
        content = IF(update_content IS NULL OR update_content = '', content, update_content)
    WHERE post_id = update_post_id;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-05  7:02:06
