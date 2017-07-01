const express = require('express'),
  parser = require('body-parser'),
  morgan = require('morgan'),
  path = require('path'),
  db = require('./db'),
  cookieParser = require('cookie-parser');
  Table = require('./models/tableModels');
  sheltersDummy = require('./dummy/shelters');
  dogsDummy = require('./dummy/dogs');
  usersDummy = require('./dummy/users');
  matchesDummy = require('./dummy/matches');
  router = require('./routes/routes');

require('dotenv').config();

const app = express();

app.use(parser.json())
   .use(parser.urlencoded({ extended: true }))
   .use(morgan(':method :url :status :res[content-length] - :response-time ms'))
   .use(express.static(path.join(__dirname, '../public')))
   .use(express.static(path.join(__dirname, '../node_modules')))
   .use('/', router);

db.authenticate()
  .then(() => Table.Shelter.sync({ force: true }))
  .then(() => Table.Dog.sync({ force: true }))
  .then(() => Table.User.sync({force: true}))
  .then(() => Table.User_Dog.sync({ force: true }))
  .then(() => Table.Shelter.bulkCreate(sheltersDummy))
  .then(() => Table.Dog.bulkCreate(dogsDummy))
  .then(() => Table.User.bulkCreate(usersDummy))
  .then(() => Table.User_Dog.bulkCreate(matchesDummy))
  .then(() => Table.Message.sync())
  .then(() => Table.MessageHistory.sync())
  .then(function() {
    console.log('Connection successful');
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`app is listening at http://localhost:${port}`));
  })
  .catch(function(error) {
    console.log("Error creating connection:", error);
  });
