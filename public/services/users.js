"use strict";

angular.module('mutt-match')

.service('userService', ['$http', 'store', function($http, store) {

  this.registerUser = (data) => {
    const user = {
      name: data.email
    };
    console.log('this is e-mail from user ', user);
    return $http.post('/users', user)
      .then((results) => {
        this.profile = store.get('profile');
        this.profile.userInfo = results;
        store.set('profile', this.profile);
        console.log('registerUser in userService success');
      })
      .catch((err) => {
        console.error('registerUser in userService fail ', err);
      })
  }


}]);