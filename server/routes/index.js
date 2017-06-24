const router = require('express').Router(),
<<<<<<< HEAD
  usersRouter = require('./users'),
  sheltersRouter = require('./shelters'),
  dogsRouter = require('./dogs'),
  matchesRouter = require('./matches'),
  imagesRouter = require('./images'),
  dbxRouter = require('./dbx');
=======
      usersRouter = require('./users'),
      sheltersRouter = require('./shelters'),     
      dogsRouter = require('./dogs'),     
      matchesRouter = require('./matches'),
      imagesRouter = require('./images'),
      dbxRouter = require('./dbx');  
>>>>>>> cab0ec63aa637200a4f9c2f4bed4c7788e9b0789

router.use('/users/:id/matches', matchesRouter);
router.use('/users', usersRouter);
router.use('/dogs/:id/image', imagesRouter);
router.use('/dogs', dogsRouter);
router.use('/shelters', sheltersRouter);
router.use('/dropbox', dbxRouter);

//fill these out right later... just avoiding a 404 for now
router.use('/about', router.get('/', (req, res) => {}));
router.use('/contact', router.get('/', (req, res) => {}));

module.exports = router;
