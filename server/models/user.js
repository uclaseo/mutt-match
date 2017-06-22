'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    googleId: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.INTEGER,
    grooming: DataTypes.INTEGER,
    size: DataTypes.INTEGER,
    noise: DataTypes.INTEGER,
    petExperience: DataTypes.BOOLEAN,
    children: DataTypes.BOOLEAN,
    currentDogs: DataTypes.BOOLEAN,
    currentPets: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};