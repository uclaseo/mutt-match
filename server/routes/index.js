const router = require('express').Router(),
      usersRouter = require('./users'),
      sheltersRouter = require('./shelters'),     
      dogsRouter = require('./dogs'),     
      matchesRouter = require('./matches');  

router.use('/users/:id/matches', matchesRouter);
router.use('/users', usersRouter);
router.use('/dogs', dogsRouter);
router.use('/shelters', sheltersRouter);

 module.exports = router;