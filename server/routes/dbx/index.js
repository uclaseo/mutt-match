const router = require('express').Router(),
      dbx = require('./dbx');

router.get('/', dbx.findAllLinksCtrl);

 module.exports = router;