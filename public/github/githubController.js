angular.module('routesApp')

.controller('githubCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.changeState = function(stateName) {
    $state.go(stateName);
  };
}]);
