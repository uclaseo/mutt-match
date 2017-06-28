angular.module('mutt-match', ['ui.router', 'auth0.lock', 'ngMaterial'])

.config(['$stateProvider', '$urlServiceProvider', '$locationProvider', 'lockProvider', function($stateProvider, $urlServiceProvider, $locationProvider, lockProvider) {

  $urlServiceProvider.rules.otherwise({ state: 'home' });

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
      resolve: {
        login: (authService) => authService.login,
        isAuthenticated: (authService) => authService.isAuthenticated
      }
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
  lockProvider.init({
    clientID: 'R6TjzEfP3EdjIfAAcLMOxnsFYzYua1nY',
    domain: 'max-hoffman.auth0.com',
    options: {
      oidcConformant: true,
      autoclose: true,
      auth: {
        responseType: 'id_token token',
        audience: 'https://max-hoffman.auth0.com/userinfo',
        redirectUrl: 'http://localhost:3000/',
        params: {
          scope: 'openid profile email'
        }
      }
    }
  });

  // $locationProvider.hashPrefix('');
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });

}]);

