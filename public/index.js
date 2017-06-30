angular.module('mutt-match', ['ui.router', 'ngMaterial', 'auth0', 'angular-storage', 'angular-jwt', 'ngMaterial'])

.config(['$stateProvider', '$urlServiceProvider', '$locationProvider', '$provide', 'authProvider', '$urlRouterProvider', '$httpProvider', 'jwtInterceptorProvider',
  function($stateProvider, $urlServiceProvider, $locationProvider, $provide, authProvider, $urlRouterProvider, $httpProvider, jwtInterceptorProvider) {

      authProvider.init({
        domain: 'inseok-ucla.auth0.com',
        clientID: '5Ni7Cxf9IF24IJX51HVbNqlkY78UHP9O'
      });
      
      jwtInterceptorProvider.tokenGetter = function(store) {
        return store.get('id_token');
      }

      $urlRouterProvider.otherwise('/');

      function redirect($q, $injector, $timeout, store, $location) {
        var auth;
        $timeout(function() {
          auth = $injector.get('auth');
        });
        return {
          responseError: function(rejection) {
            if (rejection.status === 401) {
              auth.signout();
              store.remove('profile');
              store.remove('id_token');
              $location.path('/');
            }
            return $q.reject(rejection);
          }
        }
      }
      $provide.factory('redirect', redirect);
      $httpProvider.interceptors.push('redirect');
      $httpProvider.interceptors.push('jwtInterceptor');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/states/home/home/home.html',
      controller: 'HomeCtrl',
      controllerAs: 'ctrl'
    })
    .state('callback', {
      url: '/:jwt',
      component: 'callback',
      params: { jwt: null }
    })
    .state('matches', {
      url: '/users/8/matches',
      component: 'matches',
    })
    .state('about', {
      url: '/about',
      component: 'about'
    })
    .state('contact', {
      url: '/contact',
      component: 'contact'
    })
    // .state('fetching', {
    //   url: '/fetching',
    //   component: 'fetching'
    // })
    .state('questionnaire', {
      url: '/questionnaire',
      component: 'questionnaire'
    })
    .state('logout', {
      url: '/logout',
      component: 'logout'
    })
    .state('addDog', {
      url: '/addDog',
      templateUrl: './states/home/addDog/addDog.html',
      controller: 'addDogCtrl',
      controllerAs: 'ctrl'
    })
    .state('addShelter', {
      url: '/addShelter',
      templateUrl: './states/home/addShelter/addShelter.html',
      controller: 'addShelterCtrl',
      controllerAs: 'ctrl'
    })

  // auth0 setup
  // lockProvider.init({
  //   clientID: 'R6TjzEfP3EdjIfAAcLMOxnsFYzYua1nY',
  //   domain: 'max-hoffman.auth0.com',
  //   options: {
  //     oidcConformant: true,
  //     autoclose: true,
  //     auth: {
  //       responseType: 'id_token token',
  //       audience: 'https://max-hoffman.auth0.com/userinfo',
  //       redirectUrl: 'http://localhost:3000/',
  //       params: {
  //         scope: 'openid profile email'
  //       }
  //     }
  //   }
  // });

  // $locationProvider.hashPrefix('');
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });

}])

    .run(function($rootScope, auth, store, jwtHelper, $location) {

      $rootScope.$on('$locationChangeStart', function() {
        var token = store.get('id_token');
        if (token) {
          if (!jwtHelper.isTokenExpired(token)) {
            if (!auth.isAuthenticated) {
              auth.authenticate(store.get('profile'), token);
            }
          }
        } else {
          $location.path('/');
        }
      })
      
    });