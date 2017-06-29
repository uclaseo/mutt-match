// 'use strict';
// module.exports = {
//   up: function (queryInterface, Sequelize) {
//     return queryInterface.bulkInsert('Shelters', sheltersData);
//   },

//   down: function (queryInterface, Sequelize) {
//     /*
//       Add reverting commands here.
//       Return a promise to correctly handle asynchronicity.

//       Example:
//       return queryInterface.bulkDelete('Person', null, {});
//     */
//   }
// };

var sheltersDummy = [{
  "name": "Not a shelter",
  "address": "who cares"
},{
  "name": "Runolfsson Inc",
  "address": "3429 Golf Course Trail"
}, {
  "name": "Jaskolski, Howell and Hessel",
  "address": "58633 Manley Center"
}, {
  "name": "Herman Group",
  "address": "3 Center Parkway"
}, {
  "name": "VonRueden-Sporer",
  "address": "64 Namekagon Junction"
}, {
  "name": "Bogisich-Heaney",
  "address": "206 Iowa Drive"
}, {
  "name": "Windler, Pfannerstill and Spencer",
  "address": "64 Pond Center"
}, {
  "name": "Heaney Group",
  "address": "991 Fordem Pass"
}, {
  "name": "Friesen LLC",
  "address": "93933 David Plaza"
}, {
  "name": "Macejkovic, Lowe and Wunsch",
  "address": "9690 Spaight Parkway"
}, {
  "name": "Jacobson, Gottlieb and Champlin",
  "address": "7402 Charing Cross Alley"
}];

module.exports = sheltersDummy;