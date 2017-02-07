Chunky.controller('BoardShowCtrl',
  ['$scope', '$stateParams', 'boardService', 'listService', 'cardService',
    function($scope, $stateParams, boardService, listService, cardService) {

      boardService.show($stateParams.id).then(function(board) {
        $scope.board = board;
        $scope.lists = board.lists;
        $scope.allCards = cardService.cards;
        $scope.showCard = function(id) {
          $('.modal[data-id='+id+']').modal();
        };
        $scope.showEditable = function() {
          $scope.editDescription = true;
        };
        $scope.hideEditable = function(card) {
          $scope.editDescription = false;
          cardService.save(card);
        };
        $scope.completionChange = function(card) {
          cardService.save(card);
        }
        $scope.createCard = listService.createCard;
      });

    }
  ]
);
