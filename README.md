# mutt-match
find hot local mutts in your area

## General tech stack:
Node for back-end, mysql for database, Angular 1 for front-end. 
Extras:
 - Dropbox API
 - Auth0
 - Gulp for auto-builds
 - Docker-compose with postgres db on aws swarm

## Repo use:
Clean, migrate and seed database named "mutt_match":
```bash
gulp build
```
** note: this fails sometimes when osx messes with the linux carriage return character, or if for some reason your computer defualts restricting access to bash scripts.  edit in vim and run ":set fileformat=unix" for the first, and chmod +x ./bin/build.sh should take care of the second

Start server:
```bash
gulp
```

Add images to dropbox:
```bash
node uploadToDropbox.js
```
** note: sometimes throws error and only adds some in folder, have to check with findAllLinks to see

## Database setup:
Follows: https://scotch.io/tutorials/creating-an-angularjs-application-with-sequelize-part-1
1. Install dependencies:
```bash
npm install --save sequelize sequelize-cli mysql2
npm install -g sequelize-cli
```
2. Make a .sequelizerc file:
```javascript
var path = require('path');

module.exports = {
  'config': path.resolve('./', 'config/config.js'),
  'migrations-path': path.resolve('./', 'server/migrations'),
  'seeders-path': path.resolve('./', 'server/seeders'),
  'models-path': path.resolve('./', 'server/models')
};
```
3. Initialize sequelize folders:
```bash
sequelize init
```
4. Modify the config file so it is exporting the data (add module.exports = {})
5. Modify the config file to match the name of your database
6. Make your database (make sure mysql server is running beforehand, otherwise you will get an error when logging in as root):
```bash
mysql -u root -p;
CREATE DATABASE your_database_name;
# show databases;
# show tables; (after you make your tables)
```
7. Make your tables. Change the table name and attributes to fit your model. Can add foreign keys and relatioships manually in your code afterwards.
```bash
sequelize model:create --name=TABLENAME --attributes name:string,bio:text,count:integer --underscored
```
8. "Migrate" (connect/create tables) your database
```bash
sequelize db:migrate
```
9. Test your connection in your main server file (server.js or index.js)
```javascript
var models = require('./server/models/');
models.sequelize
  .authenticate()
  .then(function () {
    console.log('Connection successful');
  })
  .catch(function(error) {
    console.log("Error creating connection:", error);
  });
  ```
  10. Check your database tables in the mysql terminal, and run server to verify the connection.

## Deployment
If you want to play around with deployment, the stack is up on an AWS swarm managed by docker cloud, and built with the docker-compose.yml file.
