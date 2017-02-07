Chunky.factory('listService',
  ['Restangular', 'cardService',
    function(Restangular, cardService) {
      var _lists;
      var exports = {};

      var setupList = function(list) {
        Restangular.restangularizeElement(null, list, 'lists');
        list.showNewCard = false;
        list.newCard = {
          list_id: list.id,
          title: ""
        };
        Restangular.restangularizeElement(null, list.newCard, 'cards');
      };

      exports.setup = function(lists) {
        _lists = lists;
        cardService.setup(lists);
        _lists.forEach(function(list) {
          setupList(list);
        });
      };

      exports.createCard = function(list) {
        cardService.create(list.newCard).then(function() {
          Restangular.one('lists', list.id).get().then(function(response) {
            angular.copy(response, list);
            setupList(list);
          });
        });
      };

      return exports;
    }
  ]
);
