'use strict';
module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define('Dog', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    // shelterId: DataTypes.INTEGER,
    active: DataTypes.INTEGER,
    grooming: DataTypes.INTEGER,
    size: DataTypes.INTEGER,
    noise: DataTypes.INTEGER,
    experienceReq: DataTypes.BOOLEAN,
    childFriendly: DataTypes.BOOLEAN,
    dogFriendly: DataTypes.BOOLEAN,
    petFriendly: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Dog.belongsTo(models.Shelter, { foreignKey:'shelter' });

      }
    }
  });
  return Dog;
};