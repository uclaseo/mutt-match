"use strict";

angular.module('mutt-match')
.service('userService', ['$http', 'store', function($http, store) {

  this.getUserIdFromEmail = function() {
    var email = store.get('profile').email;
    return $http.get(`/users/email/${email}`)
  }

  this.registerUser = (data) => {
    const user = {
      email: data.email
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