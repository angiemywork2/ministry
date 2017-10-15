
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


module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("request", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    }
  });
  return Post;
};
