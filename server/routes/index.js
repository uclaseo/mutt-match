const router = require('express').Router(),
      usersRouter = require('./users');     

router.use('/users', usersRouter);

 module.exports = router;