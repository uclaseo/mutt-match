const express = require('express'),
  parser = require('body-parser'),
  morgan = require('morgan'),
  path = require('path'),
  db = require('./models');

const app = express();

<<<<<<< HEAD
app
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }))
  .use(morgan(':method :url :status :res[content-length] - :response-time ms'))
  .use(require('cookie-parser')())
  .use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))
  .use(express.static(path.join(__dirname, '../public')))
  .use(express.static(path.join(__dirname, '../node_modules')))
  .use('/', require('./routes'));
=======
app.use(parser.json())
   .use(parser.urlencoded({ extended: true }))
   .use(morgan(':method :url :status :res[content-length] - :response-time ms'))
   .use(require('cookie-parser')())
   .use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))
   .use(express.static(path.join(__dirname, '../public')))
   .use(express.static(path.join(__dirname, '../node_modules')))
   .use('/', require('./routes'));
>>>>>>> cab0ec63aa637200a4f9c2f4bed4c7788e9b0789

db.sequelize
  .authenticate()
  .then(function() {
    console.log('Connection successful');
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`app is listening at http://localhost:${port}`));
  })
  .catch(function(error) {
    console.log("Error creating connection:", error);
  });
<<<<<<< HEAD
=======
      
>>>>>>> cab0ec63aa637200a4f9c2f4bed4c7788e9b0789
