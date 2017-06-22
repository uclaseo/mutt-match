'use strict';
module.exports = function(sequelize, DataTypes) {
  var Shelter = sequelize.define('Shelter', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Shelter.hasMany(models.Dog, { targetKey: 'shelter' });
      }
    }
  });
  return Shelter;
};