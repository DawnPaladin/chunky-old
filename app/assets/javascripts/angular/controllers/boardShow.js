Djello.controller('BoardShowCtrl',

  ['$scope', '$stateParams', 'boardService',

  function($scope, $stateParams, boardService) {

    $scope.board = boardService.show($stateParams.id);

  }

]);
