const db = require('../../models');
  // matches = require('../../models/??');

module.exports = {

  findAllMatchesCtrl: function(req, res) {
    matches.getDogs()
      .then(dogs => res.sendStatus(200, dogs))
      .catch(error => res.sendStatus(500, error));
  }

};
