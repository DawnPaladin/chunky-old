Chunky.factory('listService',
  ['Restangular', 'cardService',
    function(Restangular, cardService) {
      var _lists;
      var exports = {};

      var addNewCard = function() {
        this.showNewCard = true;
      };

      exports.setup = function(lists) {
        _lists = lists;
        cardService.setup(lists);
        _lists.forEach(function(list) {
          Restangular.restangularizeElement(null, list, 'lists');
          list.showNewCard = false;
          list.addNewCard = addNewCard;
          list.newCard = {
            list_id: list.id,
            title: ""
          };
        });
      };

      exports.createCard = function(list) {
        cardService.create(list.newCard).then(function() {
          list.get().then(function() {
            list.newCard = {
              list_id: list.id,
              title: ""
            };
          })
        });
      };

      return exports;
    }
  ]
);
