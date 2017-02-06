Chunky.factory('cardService',
  ['Restangular',
    function(Restangular) {
      var _cards = [];
      var exports = {};

      exports.setup = function(lists) {
        lists.forEach(function(list) {
          list.cards.forEach(function(card) {
            _cards.push(card);
          });
        });
        console.log(_cards);
      };

      return exports;
    }
  ]
);
