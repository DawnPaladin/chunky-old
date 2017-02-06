Chunky.factory('boardService',
  ['Restangular',
    function(Restangular) {
      var _boards;
      var exports = {};

      exports.all = function() {
        return Restangular.all('boards').getList()
          .then(function(data) {
            return _boards = data;
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

      exports.getBoards = function() {
        return _boards;
      }

      return exports;
    }
  ]
)
