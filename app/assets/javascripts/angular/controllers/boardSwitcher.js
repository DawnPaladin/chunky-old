Chunky.controller('BoardSwitcherCtrl',

  ['$scope', '$state', '$stateParams', 'boardService',

  function($scope, $state, $stateParams, boardService) {

    $scope.boards = boardService.getBoards();;

    if ($scope.boards.length === 0) {
      $state.go('main.new-board')
    } else {
      $scope.selectedBoard = boardService.getBoards()[0].id;
    }

    $scope.$watch('selectedBoard', function(boardId) {
      if (!boardId) {
        $state.go('main.new-board');
      } else {
        $state.go('main.show-board', { id: boardId })
      }
    });

    boardService.all()
      .then(function(boards) {
        $scope.boards = boards;
      })

    // $scope.showBoardForm = false;
    // $scope.toggleBoardForm = function() {
    //   $scope.showBoardForm = !$scope.showBoardForm;
    // }

    $scope.deleteBoard = function() {
      boardService.delete($scope.board.id);
    }

  }

]);
