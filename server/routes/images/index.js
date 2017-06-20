const router = require('express').Router({ mergeParams: true }),
      images = require('./images');

router.get('/', images.downloadOneCtrl);

 module.exports = router;