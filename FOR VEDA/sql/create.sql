DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,       
  email VARCHAR(100) NOT NULL,   
  password VARCHAR(100) NOT NULL   
);

-- INSERT INTO users(id, username, email, password, firstName, lastName)
-- VALUES();


