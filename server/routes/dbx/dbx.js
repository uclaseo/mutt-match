const db = require('../../models'),
      dbx = require('../../utils/dbx');

module.exports = {
  findAllLinks: (req, res) => {
    dbx.getLinks(req.body.path)
    .then(res.send)
    .catch(error => res.sendStatus(409, error));
  }
};