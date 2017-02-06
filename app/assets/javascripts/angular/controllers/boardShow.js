Chunky.controller('BoardShowCtrl',
  ['$scope', '$stateParams', 'boardService',
    function($scope, $stateParams, boardService) {

      boardService.show($stateParams.id).then(function(board) {
        $scope.board = board;
        $scope.lists = board.lists;
        $scope.showCard = function(id) {
          $('.modal[data-id='+id+']').modal();
        };
        $scope.showEditable = function() {
          $scope.editDescription = true;
        };
        $scope.hideEditable = function(content) {
          $scope.editDescription = false;
          console.log(content);
        }
      });

    }
  ]
);
