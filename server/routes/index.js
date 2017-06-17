const router = require('express').Router(),
      usersRouter = require('./users'),
      sheltersRouter = require('./shelters'),     
      dogsRouter = require('./dogs'),     
      matchesRouter = require('./matches');  
      authRouter = require('./auth');  

router.use('/users/:id/matches', matchesRouter);
router.use('/users', usersRouter);
router.use('/dogs', dogsRouter);
router.use('/shelters', sheltersRouter);
router.use('/auth', authRouter);

 module.exports = router;