USE `c9`;
DROP TABLE IF EXISTS `booking`;

CREATE TABLE `booking` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) NOT NULL,
  `hotel_id` varchar(255) NOT NULL,
  `hotel_name` varchar(255) NOT NULL,
  `hotel_desc` text,
  `hotel_address` text,
  `hotel_lat` varchar(255) DEFAULT '0.0',
  `hotel_long` varchar(255) DEFAULT '0.0',
  `hotel_image` varchar(255) NOT NULL,
  `hotel_rating` tinyint(3) unsigned DEFAULT '0',
  `updated_at` timestamp,
  `created_at` timestamp,
  `check_in` timestamp,
  `check_out` timestamp,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT '0.0',
  `info` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB CHARSET=utf8;