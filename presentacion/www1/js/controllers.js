angular.module('app.controllers', [])
  
.controller('busquedaCtrl',['$scope', '$location', 'Agregar', function($scope, $location, Agregar) {
 var ingreso_c ;
  $scope.cliente = {}
  $scope.save = function() {
	  Agregar.carrito($scope.cliente.usuario,$scope.cliente.contrasena);
  };
}])
   
.controller('itemsCtrl', function($scope) {

})
      
.controller('loginCtrl',['$scope', '$location', 'ObtenerUsuario', function($scope, $location, ObtenerUsuario) {
 var ingreso_c ;
  $scope.cliente = {}
  $scope.save = function() {
	  ObtenerUsuario.usuario($scope.cliente.usuario,$scope.cliente.contrasena);
  };
}])
  
.controller('signupCtrl', function($scope) {

})
   
.controller('descripciNCtrl', ['$scope', '$location', 'Vender', function($scope, $location, Vender) {
  $scope.cliente = {}
  $scope.save = function() {
	  Vender.venta($scope.cliente.usuario,$scope.cliente.contrasena);
  };
   $scope.eliminar = function() {
	  Vender.eliminar($scope.cliente.usuario,$scope.cliente.contrasena);
  };
  
}])
   
.controller('descripciN2Ctrl', function($scope) {

})
   
.controller('mapaCtrl', function($scope) {

})
   
.controller('mapa2Ctrl', function($scope) {

})

.controller('ayuda', function($scope) {
	
})

.controller('ModificarCtrl', ['$scope', '$location', 'Modificar', function($scope, $location, Modificar) {
 $scope.cliente = {}
  $scope.save = function() {
	  Modificar.mod($scope.cliente.usuario,$scope.cliente.contrasena);
  };
  
}])
 