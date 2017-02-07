Chunky.factory('listService',
  ['Restangular', 'cardService',
    function(Restangular, cardService) {
      var _lists;
      var exports = {};

      var newCard = function() {
        this.showNewCard = true;
      };

      exports.setup = function(lists) {
        _lists = lists;
        cardService.setup(lists);
        _lists.forEach(function(list) {
          list.showNewCard = false;
          list.newCard = newCard;
        });
      };

      return exports;
    }
  ]
);
