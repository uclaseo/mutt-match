const router = require('express').Router(),
      local = require('./local');


router.get('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.sendStatus(404, err); }
    if (!user) { return res.sendStatus(401, 'invalid credentials'); }

    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.sendStatus(200, user);
    });
  })(req, res, next);
});

router.post("/login", 
  passport.authenticate('local-login'), 
  (req, res) => res.sendStatus(201, req.user)
);
  
router.get('/logout',
  function(req, res){
    req.logout();
    res.sendStatus(200);
  });

router.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });