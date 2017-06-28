// this does fucking nothing

// const db = require('../../models'),
//       bcrypt = require('bcrypt-as-promised');

// module.exports = {
//   loginCtrl: (req, res) => res.sendStatus(201, req.user),
//   isLoggedInCtrl: (req, res) => res.send(req.isAuthenticated() ? req.user : '0',
//   logoutCtrl: (req, res) => {
//     req.logout();
//     res.sendStatus(200);
//   },
//   signupCtrl: (req, res) => {
//     bcrypt.hash(req.body.password, 10)
//     .then(hashed => {
//        req.body.password = hashed;
//        return db.User.create(req.body)
//     })
//     .then(user => res.sendStatus(201, user))
//     .catch(error => res.sendStatus(404, `signup error: ${error}`));
//     })
//   }
// }