const router = require('express').Router(),
      users = require('./users');

router.get('/:id', users.findOneUserCtrl);
router.put('/:id/', users.updateUserCtrl);
router.get('/', users.findAllUsersCtrl);
router.post('/', users.createUserCtrl);

module.exports = router;