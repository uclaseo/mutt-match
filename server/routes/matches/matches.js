const db = require('../../models');

module.exports = {

  findAllMatchesCtrl: function(req, res) {
    let id = req.params.id;
    let dogObjs = [];

    db.Match.findAll({
        attributes: ['dog', 'score'],
        where: {
          user: id,
          score: {
            $gte: 60
          }
        }
      })
      .then(matches => {
        dogObjs = matches;
        let promises = dogObjs.map(dogObj => {
          let score = dogObj.dataValues.score;

          return db.Dog.findOne({
            where: {
              id: dogObj.dataValues.dog
            }
          });
        });
        return Promise.all(promises);
      })
      .then(results => {
        return results;
      })
      .then(results => res.status(200).json(results))
      .catch(error => res.sendStatus(500, error));

  }

};
