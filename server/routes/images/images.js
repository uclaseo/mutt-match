const db = require('../../models'),
      dbx = require('../../utils/dbx');

module.exports = {
  downloadOneCtrl: (req, res) => {
    db.Dog.findOne({ where: {id: req.params.id }})
    .then(dog => {
      return dbx.download(dog.imageLink);
    })
    .then(res.send)
    .catch(error => res.sendStatus(409, error));
  }
};