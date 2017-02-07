Chunky.filter('completed', function() {
  return function(collection, completed) {
    var filteredCollection = [];
    angular.forEach(collection, function(item) {
      if (item.completed === completed) {
        filteredCollection.push(item);
      }
    })
    return filteredCollection;
  }
});
