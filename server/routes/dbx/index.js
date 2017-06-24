const router = require('express').Router(),
      dbx = require('./dbx');

router.get('/images', dbx.findAllLinksCtrl);

module.exports = router;