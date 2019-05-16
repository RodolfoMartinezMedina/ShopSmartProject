### Schema
DROP DATABASE IF EXISTS shopsmart_db;
CREATE DATABASE shopsmart_db;
USE shopsmart_db;

CREATE TABLE sitevendor
(
	vid int NOT NULL AUTO_INCREMENT,
	vendorname varchar(30) NOT NULL,
    PRIMARY KEY (vid)
);


CREATE TABLE product
(
	upccode BIGINT NOT NULL,
	prodname varchar(255) NOT NULL,
	proddescription varchar(255),
	vid1 INT NOT NULL,
 	price1 DECIMAL(7,2) NOT NULL,
	vid2 INT NOT NULL,
 	price2 DECIMAL(7,2) NOT NULL,
  	fromdate date NOT NULL,
	PRIMARY KEY (upccode),
	FOREIGN KEY (vid1) REFERENCES sitevendor(vid),
	FOREIGN KEY (vid2) REFERENCES sitevendor(vid)
);

CREATE TABLE siteuser
(
	userprodid int NOT NULL AUTO_INCREMENT,
	username varchar(50) NOT NULL,
	pid BIGINT,
    PRIMARY KEY (userprodid),
	FOREIGN KEY (pid) REFERENCES product(upccode)
);