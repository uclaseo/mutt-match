const router = require('express').Router({ mergeParams: true }),
  matches = require('./matches')

router.get('/', matches.findAllMatchesCtrl);

module.exports = router;
