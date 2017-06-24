const db = require('../../models');

module.exports = {
  findAllDogsCtrl: function(req, res) {
    db.Dogs.findAll()
    .then(dog => res.sendStatus(201, dog))
    .catch(error => res.sendStatus(500, error))
  },
  findOneDogCtrl: function(req, res) {
    db.Dogs.findOne({ where: {id: req.params.id }})
    .then(dog => res.sendStatus(201, dog))
    .catch(error => res.sendStatus(500, error));
  }
};