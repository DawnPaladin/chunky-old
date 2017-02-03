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
    $urlRouterProvider.otherwise('/board')

    $stateProvider
      .state('board', {
        url: '/board',
        views: {
          'board@': {
            templateUrl: '/templates/board.html',
            controller: ['$scope', function($scope) {
              $scope.temp = "Hello World!";
            }]
          },
          'board-switcher@': {
            templateUrl: '/templates/board_switcher.html',
            controller: 'BoardSwitcherCtrl'
          }
        }
      })
  }
])
