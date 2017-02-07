Chunky.factory('cardService',
  ['Restangular',
    function(Restangular) {
      var exports = {};
      exports.cards = [];

      exports.setup = function(lists) {
        lists.forEach(function(list) {
          list.cards.forEach(function(card) {
            Restangular.restangularizeElement(null, card, 'cards');
            exports.cards.push(card);
          });
        });
      };

      exports.save = function(card) {
        console.log(card);
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
