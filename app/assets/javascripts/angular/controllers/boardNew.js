Chunky.controller('BoardNewCtrl',

  ['$scope', 'boardService',

  function($scope, boardService) {

    $scope.createBoard = function() {
      boardService.create($scope.newBoard.name);
    }

  }

]);
