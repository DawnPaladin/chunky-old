Djello.factory('boardService',

  ['Restangular',

  function(Restangular) {

    var exports = {};

    exports.all = function() {
      return Restangular.all('boards').getList().$object;
    }

    exports.create = function(boardName) {
      return Restangular.all('boards').post({
        board: {
          name: boardName
        }
      }).then(function(data) {
          return data;
        })
    }

    return exports;

  }

])
