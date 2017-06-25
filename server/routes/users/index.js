const router = require('express').Router(),
      users = require('./users');

router.get('/:id', users.findOneUserCtrl);
router.put('/:id', users.updateUserCtrl);
router.delete('/:id', users.deleteUserCtrl);
router.get('/', users.findAllUsersCtrl);
router.post('/', users.findOrCreateUserCtrl);

module.exports = router;