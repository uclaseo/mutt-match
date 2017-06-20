const db = require('../../models'),
      dbx = require('../../utils/dbx');

module.exports = {
  findAllLinksCtrl: (req, res) => {
    dbx.getLinks()
    .then(links => res.sendStatus(200, links))
    .catch(error => res.sendStatus(409, error));
  }
};