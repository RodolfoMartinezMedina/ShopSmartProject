-- INSERT INTO siteuser (username, pid) VALUES ('Meeses', '121122233332');
-- INSERT INTO siteuser (username, pid) VALUES ('Meeses', '121122231111');
-- INSERT INTO siteuser (username, pid) VALUES ('Bobbi', '121122454511' );
-- INSERT INTO siteuser (username, pid) VALUES ('Bobbi', '121122231111' );
-- INSERT INTO siteuser (username, pid) VALUES ('Sylvester', '888122231111');
-- INSERT INTO siteuser (username, pid) VALUES ('Sylvester', '121122454511');
-- INSERT INTO siteuser (username, pid) VALUES ('Sylvester', '121122231111');

-- INSERT INTO sitevendor (vendorname) VALUES ('Amazon');
-- INSERT INTO sitevendor (vendorname) VALUES ('WalMart');

INSERT INTO product (name, upc, source1, salePrice1, source2, salePrice2) VALUES ('echo dot', '121122233332', 'Best Buy', 122.23, 'Amazon', 124.99);
INSERT INTO product (name, upc, source1, salePrice1, source2, salePrice2) VALUES ( 'VIFUUR Water Sports Shoes', '121122231111', 'Best Buy', 12.99, 'Amazon', 12.29);
INSERT INTO product (name, upc, source1, salePrice1, source2, salePrice2) VALUES ( 'Angry Orange Pet Odor Eliminator', '120000031111','Best Buy', 31.23, 'Amazon', 30.50 );
INSERT INTO product (name, upc, source1, salePrice1, source2, salePrice2) VALUES ( 'BB Brotrade Reusable MEsh Produce Bags', '888122231111', 'Best Buy', 89.99, 'Amazon', 89.80);
INSERT INTO product (name, upc, source1, salePrice1, source2, salePrice2) VALUES ( 'EU travel Plug Adapter', '121122454511', 'Best Buy', 7.98, 'Amazon', 7.96);


select prodname, upccode, vid1, price1, vid2, price2 from siteuser 
left join product on siteuser.pid=product.upccode
where siteuser.username='Meeses';

select product.prodname, a1.price AS price1, a2.price AS price2 from siteuser 
left join product on siteuser.pid = product.upccode
left join pricingData as a1 on siteuser.pid = a1.pid

where siteuser.username = 'Meeses';