Chunky.factory('cardService',
  [
    function() {
      var _cards = [];
      var exports = {};

      exports.setup = function(lists) {
        lists.forEach(function(list) {
          list.cards.forEach(function(card) {
            _cards.push(card);
          });
        });
      };

      return exports;
    }
  ]
);
