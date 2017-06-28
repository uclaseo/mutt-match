const Table = require('../../models/tableModels');

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
  }
  
};
