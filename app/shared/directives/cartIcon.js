angular.module('app').directive('cartIcon',['CountCartItems', function (){
  return {
    restrict : 'E',
    template: '<li><img src="assets/img/cart.png" alt="my cart" width="22" height="22"> <span class="label label-danger">{{itemsCount}}</span></li>',
    controller: function ($rootScope, $scope, CountCartItems){
      $rootScope.$on('checkCartItems', function() {
        $scope.itemsCount = CountCartItems.itemsCount();
      });
    }
  };
}]);