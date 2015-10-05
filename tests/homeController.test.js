describe('UNIT TEST', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('homeController', function() {
    it('should load', function() {
      var $scope = {};
      var controller = $controller('HomeController', { $scope: $scope });
      expect(controller).toBeDefined();
    });
  });
  
});