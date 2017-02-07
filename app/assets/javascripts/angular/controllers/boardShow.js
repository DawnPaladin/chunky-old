Chunky.controller('BoardShowCtrl',
  ['$scope', '$stateParams', 'boardService', 'listService', 'cardService',
    function($scope, $stateParams, boardService, listService, cardService) {

      boardService.show($stateParams.id).then(function(board) {
        $scope.board = board;
        $scope.lists = board.lists;
        console.log($scope.lists);
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
        $scope.createCard = listService.createCard;
      });

    }
  ]
);
