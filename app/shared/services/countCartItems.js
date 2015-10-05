angular.module('app').service('CountCartItems',function (){

  //Aquí se pueden hacer comprobaciones previas para saber si localStorage está disponible
  //Si no es así, se pueden crear métodos de almacenamiento adicionales

  this.addItem = function (item){
      //Guardamos las referencias al Item en BBDD, session, local, cookie... en este caso en local storage
      var cart = JSON.parse(localStorage.getItem('itemsCart')) || [];
      //Añadimos el nuevo item
      cart.push(item);
      //Volvemos a guardar el localStorage
      localStorage.setItem('itemsCart', JSON.stringify(cart));
  };

  this.itemsCount = function (){
      //Guardamos las referencias al Item en BBDD, session, local, cookie... en este caso en local storage
      var cart = JSON.parse(localStorage.getItem('itemsCart')) || [];
      //Recogemos el número de items en el carrito
      return cart.length;
  };

});