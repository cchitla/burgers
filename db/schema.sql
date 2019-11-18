IF DATABASE EXISTS DROP burgers_db;
CREATE DATABASE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);