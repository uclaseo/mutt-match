const db = require('../../models');

module.exports = {
  findAllUsersCtrl: function(req, res) {
    db.Users.findAll()
      .then(users => console.log(users))
      .catch(err => console.log(err))
  },
  findOneUserCtrl: function(req, res) {
    console.log('*** findOneUserCtrl fired ***');
    let id = req.params.id;
    db.User.find(id)
      .then(results => {
        res.status(200).json(results)
      })
      .catch(err => console.log(err))
  }
}
