angular.module('mutt-match')

.controller('MatchesCtrl', [function() {

  console.log('MATCHES!!!!');

  this.dogs = [{
    name: 'Bart',
    age: 3,
    breed: 'Airedale',
    match: '91%',
    shelter: 'Long Beach Animal Shelter',
    sheterAddress: '7700 E Spring St, Long Beach, CA 90815'
  }, {
    name: 'Ruffy',
    age: 1,
    breed: 'Boxer Mix',
    match: '84%',
    shelter: 'Long Beach Animal Shelter',
    sheterAddress: '7700 E Spring St, Long Beach, CA 90815'
  }, {
    name: 'Rasmussen',
    age: 6,
    breed: 'French Bulldog',
    match: '81%',
    shelter: 'Long Beach Animal Shelter',
    sheterAddress: '7700 E Spring St, Long Beach, CA 90815'
  }];

}]);
