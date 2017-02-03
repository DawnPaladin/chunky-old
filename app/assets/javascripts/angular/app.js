var Djello = angular.module('Djello', ['ui.router', 'restangular', 'Devise']);
// TODO: rename to Chunky/Prello

Djello.config( ['RestangularProvider', function(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
  RestangularProvider.setDefaultHttpFields({
      "content-type": "application/json"
  });
}])

Djello.config(
  ['$stateProvider', '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('')

    $stateProvider
      .state('main', {
        url: '',
        views: {
          'board-switcher@': {
            templateUrl: '/templates/board_switcher.html',
            controller: 'BoardSwitcherCtrl'
          }
        }
      })
      .state('main.board', {
        url: '/board/:id',
        views: {
          'board@': {
            templateUrl: '/templates/board.html',
            controller: 'BoardShowCtrl'
          }
        }
      })
  }
])
