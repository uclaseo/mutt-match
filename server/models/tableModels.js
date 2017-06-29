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





const userFriend = db.define('userFriend', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

const userMessage = db.define('userMessage', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
})

const Message = db.define('message', {
  message: Sequelize.STRING
});

User.belongsToMany(User, {
  as: 'friend',
  through: 'userFriend'
})

userMessage.belongsTo(User, {
  as: 'participant'
})
userMessage.belongsTo(Message)
userMessage.belongsTo(User);









module.exports = {
  Shelter: Shelter,
  Dog: Dog,
  User: User,
  User_Dog: User_Dog,
  Message: Message,
  userMessage: userMessage,
  userFriend: userFriend
}