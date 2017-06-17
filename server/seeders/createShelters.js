'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', sheltersData);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

var sheltersData = [{
  "id": 1,
  "name": "Runolfsson Inc",
  "address": "3429 Golf Course Trail"
}, {
  "id": 2,
  "name": "Jaskolski, Howell and Hessel",
  "address": "58633 Manley Center"
}, {
  "id": 3,
  "name": "Herman Group",
  "address": "3 Center Parkway"
}, {
  "id": 4,
  "name": "VonRueden-Sporer",
  "address": "64 Namekagon Junction"
}, {
  "id": 5,
  "name": "Bogisich-Heaney",
  "address": "206 Iowa Drive"
}, {
  "id": 6,
  "name": "Windler, Pfannerstill and Spencer",
  "address": "64 Pond Center"
}, {
  "id": 7,
  "name": "Heaney Group",
  "address": "991 Fordem Pass"
}, {
  "id": 8,
  "name": "Friesen LLC",
  "address": "93933 David Plaza"
}, {
  "id": 9,
  "name": "Macejkovic, Lowe and Wunsch",
  "address": "9690 Spaight Parkway"
}, {
  "id": 10,
  "name": "Jacobson, Gottlieb and Champlin",
  "address": "7402 Charing Cross Alley"
}];