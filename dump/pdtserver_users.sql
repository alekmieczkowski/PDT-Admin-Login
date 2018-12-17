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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-05  6:46:26
