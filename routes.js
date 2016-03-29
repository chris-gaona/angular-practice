angular.module('routesApp', ['ui.router'])

//call the config() method on our angular module in routes.js, and we have to pass ‘ui.router’ as a dependency to the module

//UI Router uses the concept of states in which a URL path, views, and controllers are all parts of that state

//$urlRouterProvider allows us to define what happens when the user tries to route to a specific URL path manually
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  //when undefined url route to '/'
  $urlRouterProvider.otherwise('/');

  //setting up routes with the UI Router involves making states using the state() method of the $stateProvider service
  //define 3 routes
  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  })

  .state('gallery', {
    url: '/gallery',
    templateUrl: 'gallery/gallery.html',
    controller: 'galleryCtrl'
  })

  .state('github', {
    url: '/github',
    templateUrl: 'github/github.html',
    controller: 'githubCtrl'
  });
}]);
