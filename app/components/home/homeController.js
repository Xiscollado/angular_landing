angular.module('app').controller('HomeController',['$rootScope','$scope','ProductsService','CountCartItems', function ($rootScope, $scope, ProductsService, CountCartItems){

  //Update cart number
  $rootScope.$emit('checkCartItems');
  //Hero product
  $scope.heroProduct = ProductsService.heroProduct();
  //products
  $scope.products = ProductsService.products();
  //apparel
  $scope.apparels = ProductsService.apparel();

}]);