Djello.factory('boardService',

  ['Restangular',

  function(Restangular) {

    var exports = {};

    exports.all = function() {
      return Restangular.all('boards').getList()
        .then(function(data) {
          return data;
        });
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

    exports.show = function(boardId) {
      return Restangular.one('boards', boardId).get()
        .then(function(data) {
          return data;
        })
    }

    exports.delete = function(boardId) {
      return Restangular.one('boards', boardId).remove()
      .then(function(data) {
        return data;
      })
    }

    return exports;

  }

])
