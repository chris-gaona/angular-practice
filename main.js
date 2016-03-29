angular.module('learningAngular', [])
.controller('practiceCtrl', ['$scope', function($scope) {
  $scope.name = 'Alexander';

  $scope.puppies = ["Chris", "Ben", "Frank", "Janet"];

  $scope.names = [
    {"name": "Chris"},
    {"name": "Ben"},
    {"name": "Frank"},
    {"name": "Janet"}
  ]
}]);
