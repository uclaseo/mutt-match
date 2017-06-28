const Sequelize = require('sequelize');
const db = require('../db');



const Shelter = sequelize.define('Shelter', {
  name: Sequelize.STRING,
  address: Sequelize.STRING

});



const Dog = db.define('Dog', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
  imageLink: Sequelize.STRING,
  shelter: Sequelize.INTEGER,
  active: Sequelize.INTEGER,
  grooming: Sequelize.INTEGER,
  size: Sequelize.INTEGER,
  noise: Sequelize.INTEGER,
  experienceReq: Sequelize.BOOLEAN,
  childFriendly: Sequelize.BOOLEAN,
  dogFriendly: Sequelize.BOOLEAN,
  petFriendly: Sequelize.BOOLEAN

});



var User = sequelize.define('User', {
  name: Sequelize.STRING,
  city: Sequelize.STRING,
  zipcode: Sequelize.INTEGER(5),
  password: Sequelize.STRING,
  googleId: Sequelize.STRING,
  email: Sequelize.STRING,
  active: Sequelize.INTEGER,
  grooming: Sequelize.INTEGER,
  size: Sequelize.INTEGER,
  noise: Sequelize.INTEGER,
  petExperience: Sequelize.BOOLEAN,
  children: Sequelize.BOOLEAN,
  currentDogs: Sequelize.BOOLEAN,
  currentPets: Sequelize.BOOLEAN
});

const Match = sequelize.define('Match', {
  // user: Sequelize.INTEGER,
  // dog: Sequelize.INTEGER,
  score: Sequelize.INTEGER

});

Shelter.hasMany(Dog);
Dog.belongsTo(Shelter);

User.hasMany(Match);
Dog.hasMany(Match);
Match.belongsTo(User);
Match.belongsTo(Dog);





module.exports = {
  Shelter: Shelter,
  Dog: Dog,
  User: User,
  Match: Match
}