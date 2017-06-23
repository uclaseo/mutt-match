const db = require('../../models');

module.exports = {

  findAllMatchesCtrl: function(req, res) {

    let id = req.params.id;

    db.Match.findAll({
        where: {
          user: id,
          score: {
            $gte: 60
          }
        }
      })
      .then(results => res.status(200).send(results))
      .catch(error => res.sendStatus(500, error));
  }



};
