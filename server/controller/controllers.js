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
        currentPets: req.body.currentPets
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
  addDog: function(req, res) {
    
  },
  addShelter: function(req, res) {
    
  }
};
