// this does fucking nothing

const router = require('express').Router(),
      local = require('./local')
      passport = require('../../utils/passport');


// router.get('/login', function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {
//     if (err) { return res.sendStatus(404, err); }
//     if (!user) { return res.sendStatus(401, 'invalid credentials'); }

//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//       return res.sendStatus(200, user);
//     });
//   })(req, res, next);
// });

// router.post("/login", passport.authenticate('local-login'), local.loginCtrl);
  
//  // loggedin
// router.get("/loggedin", local.isLoggedInCtrl);

// router.get('/logout', local.logoutCtrl);

// router.post('/signup', local.signupCtrl)
