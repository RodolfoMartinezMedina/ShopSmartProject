### Schema
DROP DATABASE IF EXISTS shopsmart_db;
CREATE DATABASE shopsmart_db;
USE shopsmart_db;


-- CREATE TABLE product
-- (
-- 	upccode BIGINT NOT NULL,
-- 	prodname varchar(255) NOT NULL,
-- 	proddescription varchar(255),
-- 	vid1 INT NOT NULL,
--  	price1 DECIMAL(7,2) NOT NULL,
-- 	vid2 INT NOT NULL,
--  	price2 DECIMAL(7,2) NOT NULL,
--   	fromdate date NOT NULL,
-- 	PRIMARY KEY (upccode),
-- 	FOREIGN KEY (vid1) REFERENCES sitevendor(vid),
-- 	FOREIGN KEY (vid2) REFERENCES sitevendor(vid)
-- );


create table product(
  upc BIGINT,
  source1 varchar(100),
  sku INT,
  name varchar(1000),
  salePrice1 FLOAT,
  active BOOLEAN,
  url varchar(1000),
  primary key (UPC),
  source2 varchar(100),
  salePrice2 FLOAT
);