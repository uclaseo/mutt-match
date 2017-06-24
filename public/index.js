angular.module('mutt-match', ['ui.router', 'auth0.auth0'])

.config(['$stateProvider', '$urlServiceProvider', 'angularAuth0Provider', '$locationProvider', function($stateProvider, $urlServiceProvider, angularAuth0Provider, $locationProvider) {

  $stateProvider.state('home', {
    url: '/',
    component: 'home',
    resolve: {
      login: (auth) => auth.login
    }
  })
  .state('callback', {
    url: '/callback',
    component: 'callback'
  });

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
  $urlServiceProvider.rules.otherwise({ state: 'home' });
}]);