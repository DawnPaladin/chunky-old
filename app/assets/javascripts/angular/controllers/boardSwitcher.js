Djello.controller('BoardSwitcherCtrl',

  ['$scope', '$state', 'boardService',

  function($scope, $state, boardService) {

    $scope.showBoardForm = false;
    $scope.toggleBoardForm = function() {
      $scope.showBoardForm = !$scope.showBoardForm;
    }

    boardService.all()
      .then(function(boards) {
        $scope.boards = boards;
        $scope.selectedBoard = $scope.boards[0].id;
      })

    $scope.createBoard = function() {
      boardService.create($scope.newBoard.name);
      $scope.boards = boardService.all();
    }

    $scope.$watch('selectedBoard', function(boardId) {
      $state.go('main.board', { id: boardId })
    });

  }

]);
