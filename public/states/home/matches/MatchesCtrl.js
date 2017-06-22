angular.module('mutt-match')

.controller('MatchesCtrl', [function() {

  this.dogs = [{
    name: 'Bart',
    age: 3,
    breed: 'Airedale',
    match: '91%',
    shelter: 'Long Beach Animal Shelter',
    sheterAddress: '7700 E Spring St, Long Beach, CA 90815'
  }, {
    name: 'Buffy',
    age: 1,
    breed: 'Terrier Mix',
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
