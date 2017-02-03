Djello.controller('BoardSwitcherCtrl',

  ['$scope', '$state', 'boardService',

  function($scope, $state, boardService) {

    $scope.$watch('selectedBoard', function(boardId) {
      $state.go('main.board', { id: boardId })
    });

    boardService.all()
      .then(function(boards) {
        $scope.boards = boards;
        // $scope.selectedBoard = $scope.boards[0].id;
      })

    $scope.showBoardForm = false;
    $scope.toggleBoardForm = function() {
      $scope.showBoardForm = !$scope.showBoardForm;
    }

    $scope.createBoard = function() {
      boardService.create($scope.newBoard.name);
      $scope.boards = boardService.all();
    }

    $scope.deleteBoard = function() {
      boardService.delete($scope.board.id);
    }

  }

]);
