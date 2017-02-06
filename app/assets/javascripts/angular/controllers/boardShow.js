Chunky.controller('BoardShowCtrl',

  ['$scope', '$stateParams', 'boardService',

  function($scope, $stateParams, boardService) {

    boardService.show($stateParams.id).then(function(board) {
      $scope.board = board;
      $scope.lists = board.lists;
      $('.board').on('click', '.card', function(event) {
        console.log(event);
      });
    });

  }

]);
