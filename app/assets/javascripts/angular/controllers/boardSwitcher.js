Djello.controller('BoardSwitcherCtrl',

  ['$scope', 'Restangular', 'boardService',

  function($scope, Restangular, boardService) {

    $scope.showBoardForm = false;
    $scope.toggleBoardForm = function() {
      $scope.showBoardForm = !$scope.showBoardForm;
    }

    $scope.boards = boardService.all();

    $scope.createBoard = function() {
      boardService.create($scope.newBoard.name);
      $scope.boards = boardService.all();
    }

  }

]);
