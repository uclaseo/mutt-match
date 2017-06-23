const db = require('../../models');

module.exports = {
  findAllUsersCtrl: function(req, res) {
    db.Users.findAll()
      .then(users => console.log(users))
      .catch(err => console.log(err))
  },
  findOneUserCtrl: function(req, res) {

  }
}