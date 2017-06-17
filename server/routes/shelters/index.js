const router = require('express').Router(),
      shelters = require('./shelters');

router.get('/', shelters.findAllSheltersCtrl);
router.get('/:id', shelters.findOneShelterCtrl);

 module.exports = router;