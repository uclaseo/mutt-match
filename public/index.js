angular.module('mutt-match', ['ui.router', 'ngMaterial'])

.config(['$stateProvider', '$urlServiceProvider', '$locationProvider', '$provide', 'authProvider', '$urlRouterProvider', '$httpProvider', 'jwtInterceptorProvider',
  function($stateProvider, $urlServiceProvider, $locationProvider, $provide, authProvider, $urlRouterProvider, $httpProvider, jwtInterceptorProvider) {

      authProvider.init({
        domain: 'inseok-ucla.auth0.com',
        clientID: 'ku4AUn23UfSipuIY4l8e8WovJ10X5XuY'
      });
      
      jwtInterceptorProvider.tokenGetter = function(store) {
        return store.get('id_token');
      }

      $urlRouterProvider.otherwise('/home');

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
      component: 'home'
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
    .state('fetching', {
      url: '/fetching',
      component: 'fetching'
    })
    .state('questionnaire', {
      url: '/questionnaire',
      component: 'questionnaire',
    });

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

}]);

