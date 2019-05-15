DROP table if exists bestBuy_products;


use bestBuy_product_db;

create table bestBuy_products(
  upc BIGINT,
  source varchar(100),
  sku INT,
  name varchar(1000),
  salePrice FLOAT,
  active BOOLEAN,
  url varchar(1000),
  primary key (UPC)
);
SELECT * 
FROM bestBuy_products


