# mutt-match
find hot local mutts in your area

## General tech stack:
Node for back-end, mysql for database, Angular 1 for front-end. 
Additionally, we use redux for state-management, ui-router for routing, angular-material for styling, and passport for authentication.

## git workflow
starting out:
1. fork
2. clone your fork
3. set central repo as upstream remote

starting feature:
1. make feature branch:
```bash
git checkout -b feat/FEATURE_NAME
```
(optional) add the feature branch to your remote
```bash
git push -u origin feat/BRANCH_NAME
```
2. add your shit (prefix changes with (ADD), (EDIT), (DELETE)
-e.. (EDIT) Update dog service's fetch method to update the closure array upon completion

want to make pull request:
1. checkout your master (not feature branch)
2. pull in any udpates from central repo
```bash
git pull --rebase upstream master
```
3. merge your feature
```bash
git merge feat/FEATURE_NAME
```
4 make pull request manually on github

## Database setup:
Follows: https://scotch.io/tutorials/creating-an-angularjs-application-with-sequelize-part-1
1. Install dependencies:
```bash
npm install --save sequelize sequelize-cli mysql2
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
