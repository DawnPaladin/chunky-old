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
    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('main', {
        url: '',
        views: {
          'board-switcher@': {
            templateUrl: '/templates/board_switcher.html',
            controller: 'BoardSwitcherCtrl'
          }
        },
        resolve: {
          boards: function(boardService) {
            boardService.all();
          }
        },
        abstract: true
      })
      .state('main.new-board', {
        url: '/',
        views: {
          'main-area@': {
            templateUrl: '/templates/board_new.html',
            controller: 'BoardNewCtrl'
          }
        }
      })
      .state('main.show-board', {
        url: '/board/:id',
        views: {
          'main-area@': {
            templateUrl: '/templates/board.html',
            controller: 'BoardShowCtrl'
          }
        }
      })
  }
])
