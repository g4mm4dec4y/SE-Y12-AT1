CREATE TABLE site_objects(
    index = INT PRIMARY KEY
    image = VARCHAR(50)
    name = VARCHAR(50)
    year = INT
    brand = VARCHAR(50)
    model_num = VARCHAR(50)
    type = VARCHAR(50)
    colour = VARCHAR(50)
    description = VARCHAR(250)
    );

CREATE TABLE suggestions(
    name = VARCHAR(50)
    email = VARCHAR(50)
    suggestion = VARCHAR(250)
    );

INSERT INTO site_objects(index,image,name,year,brand,model_num,type,colour,description) VALUES (1,"imacg3.png","iMac G3", 1998, 000, "computer", "blue", "sample description");

SELECT * FROM site_objects;