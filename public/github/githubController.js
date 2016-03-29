angular.module('routesApp')

.controller('githubCtrl', ['$scope', '$state', '$http', function($scope, $state, $http) {
  $scope.changeState = function(stateName) {
    $state.go(stateName);
  };

  $http.get('https://api.github.com/users/chris-gaona').success(function(data) {
    $scope.user = data;
    console.log(data);
  }).error(function() {
    console.log('error in get request');
  });
}]);
