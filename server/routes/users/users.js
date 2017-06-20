const db = require('../../models');

module.exports = {
  findAllUsersCtrl: function(req, res) {
    db.User.findAll()
    .then(user => res.send(user))
    .catch(error => res.sendStatus(500, error))
  },
  findOneUserCtrl: function(req, res) {
    db.User.findOne({ where: {id: req.params.id }})
    .then(user => res.send(user))
    .catch(error => res.sendStatus(500, error));
  },
  updateUserCtrl: function(req,res) {
    db.User.update(req.body, { where: {id: req.params.id }})
    .then(user => res.sendStatus(201, user))
    .catch(error => res.sendStatus(500, error));
  }
}