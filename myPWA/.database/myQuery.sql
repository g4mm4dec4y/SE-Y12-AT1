CREATE TABLE site_objects (
    obj_index INTEGER PRIMARY KEY,
    image VARCHAR(50),
    device_name VARCHAR(50),
    year INT,
    brand VARCHAR(50),
    type VARCHAR(50),
    colour VARCHAR(50),
    description VARCHAR(150)
);

CREATE TABLE suggestions(
    name VARCHAR(50),
    email VARCHAR(50),
    suggestion VARCHAR(250)
    );

INSERT INTO site_objects(obj_index,image,device_name,year,brand,type,colour,description) VALUES (1,'/public/images/imacg3.png','iMac G3', 2002, 'Apple', 'Desktop Computer', 'Multicolour', 'A beautiful desktop computer with clear-coloured panels that add a pop of vibrance into the dullness of life.');
INSERT INTO site_objects(obj_index,image,device_name,year,brand,type,colour,description) VALUES (2,'/public/images/imacg4.png','iMac G4', 2002, 'Apple', 'Desktop Computer', 'White', 'Sleek but functional and unique design for a desktop computer.');
INSERT INTO site_objects(obj_index,image,device_name,year,brand,type,colour,description) VALUES (3,'/public/images/iphone3gs.png','iPhone 3Gs', 2009, 'Apple', 'Phone', 'Monochrome', 'A smooth glossy back, the s standing for speed.');
INSERT INTO site_objects(obj_index,image,device_name,year,brand,type,colour,description) VALUES (4,'/public/images/cybershot.png','Sony Cybershot', 2006, 'Sony', 'Camera', 'Metallic', ' Small handheld digital camera.');
INSERT INTO site_objects(obj_index,image,device_name,year,brand,type,colour,description) VALUES (5,'/public/images/gameboyadv.png','Game Boy Advance', 2001, 'Nintendo', 'Console', 'Purple', 'A revamped version of the GameBoy, perfect for playing your favourite Nintendo games.');
INSERT INTO site_objects(obj_index,image,device_name,year,brand,type,colour,description) VALUES (6,'/public/images/motorolav525.png','Motorola V525', 2003, 'Motorola', 'Phone', 'Grey', 'A classic button flip phone produced by Motorola.');
INSERT INTO site_objects(obj_index,image,device_name,year,brand,type,colour,description) VALUES (7,'/public/images/motorolarazr.png','Motorola Razr V3', 2004, 'Motorola', 'Phone', 'Multicolour', 'An iconic flip phone of the 2000s.');
INSERT INTO site_objects(obj_index,image,device_name,year,brand,type,colour,description) VALUES (8,'/public/images/samsungphone.png','Samsung SPH-i300', 2001, 'Samsung', 'Phone', 'Silver', 'An interestingly-designed Samsung Galaxy phone released in the early 2000s.');
INSERT INTO site_objects(obj_index,image,device_name,year,brand,type,colour,description) VALUES (9,'/public/images/iphone2g.png','iPhone 2G', 2007, 'Apple', 'Phone', 'Silver', 'The first iPhone, a revolutionary development in the realm of technology.');
INSERT INTO site_objects(obj_index,image,device_name,year,brand,type,colour,description) VALUES (10,'/public/images/walkman.png','Sony Walkman S603', 2007, 'Sony', 'Player', 'Multicolour', 'A music player released by Sony, a pinnacle in technology design.');

SELECT * FROM site_objects;