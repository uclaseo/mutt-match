const router = require('express').Router();
const controller = require('../controller/controllers');
const jwt = require('express-jwt');


const authCheck = jwt({
  secret: new Buffer('dMgD4_I8pT7hYsAAGJHBsIfzMyYkzSsi5xuFDLuH8HUZk0BK_ctcEY-t3kRwz-Lu'),
  audience: '5Ni7Cxf9IF24IJX51HVbNqlkY78UHP9O'
});

router.get('/users/:id', authCheck, controller.findOneUserCtrl);
router.get('/users/email/:email', authCheck, controller.fetchUserByEmail);
router.put('/users/:id', authCheck, controller.updateUserCtrl);
router.delete('/users/:id', authCheck, controller.deleteUserCtrl);
router.get('/users', authCheck, controller.findAllUsersCtrl);
router.post('/users', authCheck, controller.findOrCreateUserCtrl);



router.get('/users/:id/matches', controller.findAllMatchesCtrl);



// router.get('/', images.downloadOneCtrl);


router.get('/dog', controller.findAllDogsCtrl);
router.get('/dog/:id', controller.findOneDogCtrl);


// router.get('/images', dbx.findAllLinksCtrl);

module.exports = router;