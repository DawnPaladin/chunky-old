Chunky.factory('cardService',
  ['Restangular',
    function(Restangular) {
      var exports = {};
      exports.cards = [];

      function BlankChildCardOf(card) {
        this.parent_id = card.id;
        this.title = "";
      }

      var setupCard = function(card) {
        Restangular.restangularizeElement(null, card, 'cards');
        card.showNewCard = false;
        card.newChildCard = new BlankChildCardOf(card);
        card.createChildCard = function() {
          setupCard(card.newChildCard);
          exports.create(card.newChildCard).then(function() {
            card.get().then(function(response) {
              angular.copy(response, card);
              setupCard(card);
            });
          });
          card.newChildCard = new BlankChildCardOf(card);
          card.showNewCard = false;
        };
      };

      exports.setup = function(lists) {
        lists.forEach(function(list) {
          list.cards.forEach(function(card) {
            setupCard(card);
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
