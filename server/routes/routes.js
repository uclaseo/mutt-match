const router = require('express').Router();
const controller = require('../controller/controllers');

router.get('/users/:id', controller.findOneUserCtrl);
router.put('/users/:id', controller.updateUserCtrl);
router.delete('/users/:id', controller.deleteUserCtrl);
router.get('/users', controller.findAllUsersCtrl);
router.post('/users', controller.findOrCreateUserCtrl);



router.get('/users/:id/matches', controller.findAllMatchesCtrl);



// router.get('/', images.downloadOneCtrl);


router.get('/dog', controller.findAllDogsCtrl);
router.get('/dog/:id', controller.findOneDogCtrl);


// router.get('/images', dbx.findAllLinksCtrl);

module.exports = router;