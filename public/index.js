angular.module('mutt-match', ['ui.router', 'auth0.auth0'])

.config(['$stateProvider', '$urlServiceProvider', 'angularAuth0Provider', '$locationProvider', function($stateProvider, $urlServiceProvider, angularAuth0Provider, $locationProvider) {

  $urlServiceProvider.rules.otherwise({ state: 'home' });

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
      resolve: {
        login: (auth) => auth.login
      }
    })
    .state('callback', {
      url: '/callback',
      component: 'callback'
    })
    .state('matches', {
      url: '/users/8/matches',
      component: 'matches',
      // resolve: {
      //   matches: (matchesService) => matchesService.get('matches')
      // }
    })
    .state('about', {
      url: '/about',
      component: 'about'
    })
    .state('contact', {
      url: '/contact',
      component: 'contact'
    })

  angularAuth0Provider.init({
    clientID: 'R6TjzEfP3EdjIfAAcLMOxnsFYzYua1nY',
    domain: 'max-hoffman.auth0.com',
    responseType: 'token id_token',
    audience: 'https://max-hoffman.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
  });

  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

}]);

