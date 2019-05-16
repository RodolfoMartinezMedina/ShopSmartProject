INSERT INTO siteuser (username) VALUES ('Meeses');
INSERT INTO siteuser (username) VALUES ('Bobbi');
INSERT INTO siteuser (username) VALUES ('Sylvester');
update siteuser set pid='121122233332' where username='Meeses';

INSERT INTO sitevendor (vendorname) VALUES ('Amazon');
INSERT INTO sitevendor (vendorname) VALUES ('WalMart');

INSERT INTO product (prodname, upccode) VALUES ('echo dot', '121122233332');
INSERT INTO product (prodname, upccode) VALUES ( 'VIFUUR Water Sports Shoes', '121122231111');
INSERT INTO product (prodname, upccode) VALUES ( 'Angry Orange Pet Odor Eliminator', '120000031111');
INSERT INTO product (prodname, upccode) VALUES ( 'BB Brotrade Reusable MEsh Produce Bags', '888122231111');
INSERT INTO product (prodname, upccode) VALUES ( 'EU travel Plug Adapter', '121122454511');

INSERT INTO pricingdata (vid, pid, price, fromdate) VALUES (1, '121122233332', 122.32, '18/03/19');
INSERT INTO pricingdata (vid, pid, price, fromdate) VALUES (2, '121122233332', 124.99,'18/03/19');
INSERT INTO pricingdata (vid, pid, price, fromdate) VALUES (2, '121122231111', 12.99,'18/12/25');
INSERT INTO pricingdata (vid, pid, price, fromdate) VALUES (1, '121122231111', 12.29,'18/12/25');
INSERT INTO pricingdata (vid, pid, price, fromdate) VALUES (1, '120000031111', 31.23,'19/01/11');
INSERT INTO pricingdata (vid, pid, price, fromdate) VALUES (2, '120000031111', 30.50,'19/01/11');
INSERT INTO pricingdata (vid, pid, price, fromdate) VALUES (1, '888122231111', 89.99,'19/01/23');
INSERT INTO pricingdata (vid, pid, price, fromdate) VALUES (2, '888122231111', 89.80,'19/01/23');
INSERT INTO pricingdata (vid, pid, price, fromdate) VALUES (1, '121122454511', 89.80,'19/01/05');
INSERT INTO pricingdata (vid, pid, price, fromdate) VALUES (2, '121122454511', 89.80,'19/01/05');
