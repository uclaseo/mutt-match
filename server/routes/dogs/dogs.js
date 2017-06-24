const db = require('../../models');

module.exports = {

  findAllDogsCtrl: function(req, res) {
    db.Dog.findAll()
      .then(results => res.status(200).json(results))
      .catch(error => res.sendStatus(500, error));
  },

  findOneDogCtrl: function(req, res) {

  }
  x
};
