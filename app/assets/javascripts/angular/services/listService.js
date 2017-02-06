Chunky.factory('listService',
  ['Restangular', 'cardService',
    function(Restangular, cardService) {
      var _lists;
      var exports = {};

      exports.setup = function(lists) {
        _lists = lists;
        cardService.setup(lists);
      };

      return exports;
    }
  ]
);
