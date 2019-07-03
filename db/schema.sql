  
DROP table if exists usernameLogin;


use loginDB;

create table usernameLogin(
  
  username varchar(100),
  
  password varchar(1000),
  
  primary key (username)
);
SELECT * 
FROM usernameLogin
