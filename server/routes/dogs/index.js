const router = require('express').Router(),
      dogs = require('./dogs');

router.get('/', dogs.findAllDogsCtrl);
router.get('/:id', dogs.findOneDogCtrl);

 module.exports = router;