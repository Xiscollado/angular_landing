angular.module('app').directive('addToCartButton', ['CountCartItems',function (){
  return {
    scope : {item : '@'},
    restrict : 'E',
    template: '<button ng-click="addItems(item)" class="btn btn-cart">add to cart</button>',
    controller : function ($rootScope, $scope, CountCartItems){
      $scope.addItems = function (item){
        CountCartItems.addItem(item);
        $rootScope.$emit('checkCartItems');
      };
    }
  };
}]);