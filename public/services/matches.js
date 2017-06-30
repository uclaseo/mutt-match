angular.module('mutt-match')

.service('matchesService', ['$http', '$log', 'store', 'userService', function($http, $log, store, userService) {
  let id = 8;

  let matches = [];
  let breeds = [
    'Pitbull',
    'Pitbull',
    'Pitbull',
    'Pitbull',
    'Shepherd',
    'Shepherd',
    'Poodle',
    'Chihuahua',
    'Chihuahua',
    'Husky',
    'Boxer',
    'Bulldog',
    'Dalmation'
  ];

  //breeds not in database..

  let sex = ['male', 'female'];

  let mix = ['-mix', '-mix', '']

  this.setMatches = function() {



    userService.getUserIdFromEmail()
    .then(user => {
      console.log(user.data.results)
    })



    
  }



  this.fetchMatches = function(id) { 
    console.log(id)
    return $http.get(`/users/${id}/matches`) 

      // .then(resp => {

      //   console.log('resp.data: ', resp.data)
        
      //   let scores = resp.data.pop();
      //   console.log('scores: ' , scores)
      //   //last value in array holds all scores?
      //   matches = resp.data.reduce((acc, cur, i) => {
      //     cur.score = scores[i];
      //     let breed = breeds[Math.floor(Math.random() * breeds.length)];
      //     console.log('breed: ', breed)
      //     breed += mix[Math.floor(Math.random() * mix.length)];
      //     //one pure, two mixes?
      //     cur.breed = breed;
      //     cur.sex = sex[Math.floor(Math.random() * sex.length)];
      //     acc.push(cur);
      //     return acc;
      //   }, []);
      //   console.log('matches: ' , matches)
      //   matches.sort((a, b) => a.score > b.score ? -1 : 1);
      //   return matches;
      // })
      // .catch(err => $log.log('err', err));
  };


}]);
