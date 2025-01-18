CREATE TABLE user(
    id_user INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(50),
    address VARCHAR(255),
    password VARCHAR(255) NOT NULL
);

ALTER TABLE user
    ADD PRIMARY KEY (id_user);
    
ALTER TABLE user
    MODIFY id_user INT NOT NULL AUTO_INCREMENT;