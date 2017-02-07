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
      };

      exports.save = function(card) {
        Restangular.restangularizeElement(null, card, 'cards');
        card.put();
        // Restangular.one('cards', card.id).put({card: card});
      };

      return exports;
    }
  ]
);
