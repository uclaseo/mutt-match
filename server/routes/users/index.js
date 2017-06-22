const router = require('express').Router(),
      users = require('./users');

router.get('/', users.findAllUsersCtrl);
router.get('/:id', users.findOneUserCtrl);

 module.exports = router;