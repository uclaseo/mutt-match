const router = require('express').Router(),
      users = require('./users');

router.get('/', users.findAllUsersCtrl);
router.get('/:id', users.findOneUserCtrl);
router.put('/:id/', users.updateUserCtrl);

module.exports = router;