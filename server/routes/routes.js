const router = require('express').Router();
const controller = require('../controller/controllers');
const jwt = require('express-jwt');


const authCheck = jwt({
  secret: new Buffer('dMgD4_I8pT7hYsAAGJHBsIfzMyYkzSsi5xuFDLuH8HUZk0BK_ctcEY-t3kRwz-Lu'),
  audience: '5Ni7Cxf9IF24IJX51HVbNqlkY78UHP9O'
});

router.get('/users/:id', controller.findOneUserCtrl);
router.get('/users/:name', controller.fetchUserByName);
router.put('/users/:id', controller.updateUserCtrl);
router.delete('/users/:id', controller.deleteUserCtrl);
router.get('/users', controller.findAllUsersCtrl);
router.post('/users', controller.findOrCreateUserCtrl);

// send message from one user to another
router.post('/message/:sender/:receiver', controller.sendMessage);

// get message from one user to another
router.get('/message/:sender/:receiver', controller.getMessage);



router.get('/users/:id/matches', controller.findAllMatchesCtrl);



// router.get('/', images.downloadOneCtrl);


router.get('/dog', controller.findAllDogsCtrl);
router.get('/dog/:id', controller.findOneDogCtrl);


// router.get('/images', dbx.findAllLinksCtrl);

module.exports = router;