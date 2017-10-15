DROP DATABASE IF EXISTS ministryDB;

CREATE DATABASE ministryDB;

USE ministryDB;

CREATE TABLE request (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  email VARCHAR(65) NOT NULL,
  prayer_subject VARCHAR(30),
  comment VARCHAR(280) NOT NULL,
  private BOOLEAN default TRUE,
  PRIMARY KEY (id)
);

-- Prayer Subjects: Salvation, Family, Finances, Healing, Job/Career, Other
-- Other

INSERT INTO request (first_name, last_name, email, prayer_subject, comment)
VALUES ("Nora", "Jones", "dawnwmills@gmail.com", "Other", "Sunshine all week");

INSERT INTO request (first_name, last_name, email, prayer_subject, comment)
VALUES ("Paula", "Jones", "dawnwmills@gmail.com", "Job", "Promotion");

INSERT INTO request (first_name, last_name, email, prayer_subject, comment, private)
VALUES ("Noreen", "Green", "taneahpatterson@gmail.com", "Healing", "Healing from the flu", FALSE);

INSERT INTO request (first_name, last_name, email, prayer_subject, comment)
VALUES ("Candi", "Bluebird", "angieaka@gmail.com", "Healing", "Healing from the flu");

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
