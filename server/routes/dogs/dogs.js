const db = require('../../models');

module.exports = {

  findAllDogsCtrl: function(req, res) {
    db.Dog.findAll()
      .then(results => res.status(200).json(results))
      .catch(err => $log.log('err', err));
  },

  findOneDogCtrl: function(req, res) {
    let id = req.params.id;
    db.Dog.findById(id)
      .then(results => res.status(200).json(results))
      .catch(err => $log.log('err', err));
  }
};
