### Schema
DROP DATABASE IF EXISTS shopSmart_db;
CREATE DATABASE shopSmart_db;
USE shopSmart_db;



CREATE TABLE product
(
	upccode BIGINT NOT NULL,
	prodname varchar(255) NOT NULL,
	proddescription varchar(255),
	PRIMARY KEY (upccode)
);

CREATE TABLE siteuser
(
	userid int NOT NULL AUTO_INCREMENT,
	username varchar(50) NOT NULL,
	pid BIGINT,
    PRIMARY KEY (userid),
	FOREIGN KEY (pid) REFERENCES product(upccode)
);

CREATE TABLE sitevendor
(
	vid int NOT NULL AUTO_INCREMENT,
	vendorname varchar(30) NOT NULL,
    PRIMARY KEY (vid)
);



CREATE TABLE pricingData
(
  id INT NOT NULL AUTO_INCREMENT,
  vid INT NOT NULL,
  pid BIGINT NOT NULL,
  price DECIMAL(7,2) NOT NULL,
  fromdate date NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (vid) REFERENCES sitevendor(vid),
  FOREIGN KEY (pid) REFERENCES product(upccode) 
);