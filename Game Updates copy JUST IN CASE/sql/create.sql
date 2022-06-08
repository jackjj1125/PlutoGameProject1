DROP TABLE IF EXISTS loginPage CASCADE;
CREATE TABLE IF NOT EXISTS loginPage (
  username VARCHAR(30) NOT NULL,       
  password VARCHAR(30) NOT NULL,   
);

DROP TABLE IF EXISTS registrationPage CASCADE;
CREATE TABLE IF NOT EXISTS registrationPage(
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,       
  email VARCHAR(100) NOT NULL,   
  password VARCHAR(100) NOT NULL,             
  firstName VARCHAR(100) NOT NULL,           
  lastName VARCHAR(100) NOT NULL,      
);

DROP TABLE IF EXISTS levels CASCADE;
CREATE TABLE IF NOT EXISTS levels(
    username VARCHAR(30) NOT NULL,
    levelname VARCHAR(50) NOT NULL,
    difficulty VARCHAR(30) NOT NULL,
    
);