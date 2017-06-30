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
    Table.User.findOrCreate({ where: req.body })
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

  fetchUserByName: function(req, res) {
    Table.User.find({
      where: { name: req.params.name }
    })
      .then((user) => {
        res.json({
          results: user
        })
      })
      .catch((err) => {
        console.error('error retrieving user by name ', err);
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

  sendMessage: function(req, res) {
    Table.Message.create({
      message: req.body.message,
      userId: req.params.sender,
      toId: req.params.to
    })
      .then(message => {
        res.status(202).send(message);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  getMessage: function(req, res) {
    Table.Message.findAll({
      where: {userId: req.params.sender, toId: req.params.to},

      include: [
        {
          model: Table.User,
          as: 'to',
          attributes: ['name']
        },
        {
          model: Table.User,
          attributes: ['name']
        }
      ]
      // order: [[Sequelize.literal('"messages.message"'), 'DESC']]
    })
    .then(message => {
      res.status(200).send(message);
    })
    .catch(error => {
      res.status(404).send(error);
    })
  }
};
