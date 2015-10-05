angular.module('app').directive('product', function (){
  return {
    restrict : 'E',
    template : '<div class="grid-item {{product.size}}"> <div class="product"> <div class="product-container"> <h4 class="product-name">{{product.name}}</h4> <img ng-src="assets/img/{{product.image}}" alt="{{product.name}}"> <div class="product-info"> <h3>{{product.price | currency : "€ "}}</h3> <add-to-cart-button item="{{product}}"></add-to-cart-button> </div> </div> </div> </div>'
  };
});