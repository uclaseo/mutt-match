const Sequelize = require('sequelize');
const db = require('../db');



const Shelter = db.define('shelter', {
  name: Sequelize.STRING,
  address: Sequelize.STRING

});



const Dog = db.define('dog', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
  breed: Sequelize.STRING,
  description: Sequelize.STRING,
  imageLink: Sequelize.STRING,
  active: Sequelize.INTEGER,
  grooming: Sequelize.INTEGER,
  size: Sequelize.INTEGER,
  noise: Sequelize.INTEGER,
  experienceReq: Sequelize.BOOLEAN,
  childFriendly: Sequelize.BOOLEAN,
  dogFriendly: Sequelize.BOOLEAN,
  petFriendly: Sequelize.BOOLEAN
});



var User = db.define('user', {
  name: Sequelize.STRING,
  city: Sequelize.STRING,
  zipcode: Sequelize.INTEGER,
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

const Message = db.define('message', {
  message: Sequelize.STRING
});

const User_Dog = db.define('user_dog', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  // user: Sequelize.INTEGER,
  // dog: Sequelize.INTEGER,
  score: Sequelize.INTEGER
});

Shelter.hasMany(Dog);
Dog.belongsTo(Shelter);

User.belongsToMany(Dog, {
  through: User_Dog
});
Dog.belongsToMany(User, {
  through: User_Dog
});

Message.belongsTo(User, {
  as: 'From'
});
User.hasOne(Message, {
  as: 'From'
});

Message.belongsTo(User, {
  as: 'To'
});
User.hasOne(Message, {
  as: 'To'
});


module.exports = {
  Shelter: Shelter,
  Dog: Dog,
  User: User,
  User_Dog: User_Dog,
  Message: Message
}