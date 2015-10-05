angular.module('app').config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider){

  //Remove # from URL
  $locationProvider.html5Mode(true);
  //Routes
  //Home
  $routeProvider.when('/', {
    templateUrl : 'app/components/home/homeView.html',
    controller : 'HomeController'
  }).
  //If not match
  otherwise({
    redirectTo: '/'
  });

}]);