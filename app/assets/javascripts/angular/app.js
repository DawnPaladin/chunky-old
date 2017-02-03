var Djello = angular.module('Djello', ['ui.router', 'restangular', 'Devise']);
// TODO: rename to Chunky/Prello

Djello.config(
  ['$stateProvider', '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/board')

    $stateProvider
      .state('board', {
        url: '/board',
        templateUrl: '/templates/board.html',
        controller: ['$scope', function($scope) {
          $scope.temp = "Hello World!";
        }]
      })
  }
])
