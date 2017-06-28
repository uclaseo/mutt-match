const Table = require('../../models/tableModels');

module.exports = {

  findAllMatchesCtrl: function(req, res) {
    let id = req.params.id;
    let dogObjs = [];

    Table.Match.findAll({
        attributes: ['dog', 'score'],
        where: {
          user: id,
          score: {
            $gte: 40
          }
        }
      })
      .then(matches => {
        dogObjs = matches;
        let scores = [];
        let promises = dogObjs.map(dogObj => {
          scores.push(dogObj.dataValues.score);

          return Table.Dog.findOne({
            where: {
              id: dogObj.dataValues.dog
            }
          });
        });

        promises.push(scores);
        return Promise.all(promises);
      })
      .then(results => res.status(200).json(results))
      .catch(error => res.sendStatus(500, error));

  }

};
