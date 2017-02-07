Chunky.controller('BoardShowCtrl',
  ['$scope', '$stateParams', 'boardService', 'cardService',
    function($scope, $stateParams, boardService, cardService) {

      boardService.show($stateParams.id).then(function(board) {
        $scope.board = board;
        $scope.lists = board.lists;
        $scope.showCard = function(id) {
          $('.modal[data-id='+id+']').modal();
        };
        $scope.showEditable = function() {
          $scope.editDescription = true;
        };
        $scope.hideEditable = function(card) {
          $scope.editDescription = false;
          console.log(card);
          cardService.save(card);
        };
      });

    }
  ]
);
