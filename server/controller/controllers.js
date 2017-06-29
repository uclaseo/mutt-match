const Table = require('../models/tableModels');

module.exports = {

  findAllDogsCtrl: function(req, res) {
    Table.Dog.findAll()
    .then(dogs => res.send(dogs))
    .catch(error => res.sendStatus(500, error))
  },

  findOneDogCtrl: function(req, res) {
    Table.Dog.findOne({ where: {id: req.params.id }})
    .then(dog => res.send(dog))
    .catch(error => res.sendStatus(500, error));
  },
  
  findAllUsersCtrl: function(req, res) {
    Table.User.findAll()
      .then(user => res.send(user))
      .catch(error => res.send(error))
  },

  findOneUserCtrl: function(req, res) {
    Table.User.findOne({ where: { id: req.params.id } })
      .then(user => res.send(user))
      .catch(error => res.send(error));
  },

  findOrCreateUserCtrl: function(req, res) {
    console.log('req.body ' ,req.body)
    Table.User.create(
      {
        name: req.body.firstName + ' ' + req.body.lastName,
        city: req.body.city,
        zipcode: req.body.zipCode,
        email: req.body.email,
        active: req.body.active,
        grooming: req.body.grooming,
        size: req.body.size,
        noise: req.body.noise,
        petExperience: req.body.petExperience,
        children: req.body.children,
        currentDogs: req.body.currentDogs,
        currentPets: req.body.currentPets,
        shelter: 1
      }
    )
      .then(user => res.send(user))
      .catch(error => res.send(error));
  },

  updateUserCtrl: function(req, res) {
    Table.User.update(req.body, { where: { id: req.params.id } })
      .then(user => res.sendStatus(201, user))
      .catch(error => res.send(error));
  },

  deleteUserCtrl: function(req, res) {
    Table.User.destroy({ where: { id: req.params.id } })
      .then(user => res.sendStatus(200, user))
      .catch(error => res.send(error));
  },

  fetchUserByEmail: function(req, res) {
    Table.User.find({
      where: { email: req.params.email }
    })
      .then((user) => {
        res.json({
          results: user
        })
      })
      .catch((err) => {
        console.error('error retrieving user by email ', err);
      })
  },

  findAllMatchesCtrl: function(req, res) {
    Table.User.findAll({
      where: { id: req.params.id },
      include: [{
        model: Table.Dog
      }]
    })
    .then((dogs) => {
      res.json({
        results: dogs
      })
    })
    .catch((err) => {
      console.error('error finding matches ', err);
    })
  },


  addShelter: function(req, res) {
    Table.Shelter.create({
      name: req.body.name,
      address: req.body.address
    })
    .then(() => {
      Table.Shelter.find({
        where: { name: req.body.name }
      })
      .then((shelter) => {
        let shelterId = shelter.dataValues.id;
        Table.User.update({
          shelterId: shelterId
        }, { where: { id: req.params.userId }})
      })
    })
    .then(() => {
      res.status(201).send('successfully added shelter');
    })
    .catch((err) => {
      console.error('error adding shelter ', err);
    })
  },

  fetchShelter: function (req, res) {
    Table.Shelter.find({ where: { name: req.params.name }})
    .then((shelter) => {
      res.json({
        results: shelter
      })
    })
    .catch((err) => {
      console.error('error finding shelter ', err);
    })
  },

  addDog: function(req, res) {
    Table.Dog.create({
      name: req.body.name,
      age: req.body.age,
      breed: req.body.breed,
      imageLink: req.body.imageLink,
      active: req.body.active,
      grooming: req.body.grooming,
      size: req.body.size,
      noise: req.body.noise,
      experienceReq: req.body.experienceReq,
      childFriendly: req.body.childFriendly,
      dogFriendly: req.body.dogFriendly,
      petFriendly: req.body.petFriendly
    })
    .then(() => {
      res.status(201).send('successfully added a dog');
    })
    .catch((err) => {
      console.error('error adding dog to the database ', err);
    })
  }
};
