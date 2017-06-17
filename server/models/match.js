'use strict';
module.exports = function(sequelize, DataTypes) {
  var Match = sequelize.define('Match', {
    // user: DataTypes.INTEGER,
    // dog: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Match.hasOne(models.Dog {foreignKey: 'dog'});
        models.Match.hasOne(models.User {foreignKey: 'user'});
      }
    }
  });
  return Match;
};