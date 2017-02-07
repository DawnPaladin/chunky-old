Chunky.factory('cardService',
  ['Restangular',
    function(Restangular) {
      var _cards = [];
      var exports = {};

      exports.setup = function(lists) {
        lists.forEach(function(list) {
          list.cards.forEach(function(card) {
            Restangular.restangularizeElement(null, card, 'cards');
            _cards.push(card);
          });
        });
      };

      exports.save = function(card) {
        card.put();
        card.updated_at = new Date;
        // Restangular.one('cards', card.id).put({card: card});
      };

      exports.create = function(card) {
        return card.post();
      };

      return exports;
    }
  ]
);
