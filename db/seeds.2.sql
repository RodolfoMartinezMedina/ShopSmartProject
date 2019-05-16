INSERT INTO siteuser (username, pid) VALUES ('Meeses', '121122233332');
INSERT INTO siteuser (username, pid) VALUES ('Meeses', '121122231111');
INSERT INTO siteuser (username, pid) VALUES ('Bobbi', '121122454511' );
INSERT INTO siteuser (username, pid) VALUES ('Bobbi', '121122231111' );
INSERT INTO siteuser (username, pid) VALUES ('Sylvester', '888122231111');
INSERT INTO siteuser (username, pid) VALUES ('Sylvester', '121122454511');
INSERT INTO siteuser (username, pid) VALUES ('Sylvester', '121122231111');

INSERT INTO sitevendor (vendorname) VALUES ('Amazon');
INSERT INTO sitevendor (vendorname) VALUES ('WalMart');

INSERT INTO product (prodname, upccode, vid1, price1, vid2, price2, fromdate) VALUES ('echo dot', '121122233332', 1, 122.23, 2, 124.99, '18/03/19');
INSERT INTO product (prodname, upccode, vid1, price1, vid2, price2, fromdate) VALUES ( 'VIFUUR Water Sports Shoes', '121122231111', 1, 12.99, 2, 12.29, '18/12/19');
INSERT INTO product (prodname, upccode, vid1, price1, vid2, price2, fromdate) VALUES ( 'Angry Orange Pet Odor Eliminator', '120000031111',1, 31.23, 2, 30.50, '19/01/11' );
INSERT INTO product (prodname, upccode, vid1, price1, vid2, price2, fromdate) VALUES ( 'BB Brotrade Reusable MEsh Produce Bags', '888122231111', 1, 89.99, 2, 89.80, '19/02/23');
INSERT INTO product (prodname, upccode, vid1, price1, vid2, price2, fromdate) VALUES ( 'EU travel Plug Adapter', '121122454511', 1, 7.98, 2, 7.96, '19/01/05');


select prodname, upccode, vid1, price1, vid2, price2 from siteuser 
left join product on siteuser.pid=product.upccode
where siteuser.username='Meeses';

select product.prodname, a1.price AS price1, a2.price AS price2 from siteuser 
left join product on siteuser.pid = product.upccode
left join pricingData as a1 on siteuser.pid = a1.pid

where siteuser.username = 'Meeses';