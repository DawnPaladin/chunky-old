Djello.controller('BoardSwitcherCtrl',

  ['$scope', 'Restangular', 'boardService',

  function($scope, Restangular, boardService) {

    $scope.boards = boardService.all();

    $scope.createBoard = function() {
      console.log($scope.newBoard.name);
      boardService.create($scope.newBoard.name);
    }

  }

]);
