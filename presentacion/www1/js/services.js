angular.module('app.services', [])
.factory('ObtenerUsuario', function($http,$location,$ionicPopup,$state){
  var service = {};
  service.usuario = function(user,pass) {
  var ingresar = 0;
  $http.get('data/get_all.json').success(function(data){
              if ((data.contentItem[1].usuario == user) &&  (data.contentItem[1].contraseña == pass) ){
                            //$location.path('/page3');
                             $state.go('items.busqueda');
                    }
                    else {
                     var alertPopup = $ionicPopup.alert({
								title: 'Mensaje',
								template: 'Usuario o Clave Incorrecta'
							});
                    }
    }).
    error(function(data, status){
      var alertPopup = $ionicPopup.alert({
								title: 'Mensaje',
								template: 'No puede conectar al servidor'
							});
    });
   return ingresar; 
  }
return service;
})
.factory('Vender', function($http,$location,$ionicPopup){
  var service = {};
  service.venta = function(user,pass) {
                     var alertPopup = $ionicPopup.alert({
								title: 'Mensaje',
								template: 'Venta Exitosa'
							});
							 $location.path('/page3');
   return ingresar; 
  }
   service.eliminar = function(user,pass) {
								   var confirmPopup = $ionicPopup.confirm({
									 title: 'Mensaje',
									 template: 'Estas Seguro que deseas eliminar el item'
								   });

								   confirmPopup.then(function(res) {
									 if(res) {
									   console.log('You are sure');
									 } else {
									   console.log('You are not sure');
									 }
								   });
							 $location.path('/page8');
   return ingresar; 
  }
  
return service;
})

.factory('Agregar', function($http,$location,$ionicPopup){
  var service = {};
   service.carrito = function(user,pass) {
								   var confirmPopup = $ionicPopup.confirm({
									 title: 'Mensaje',
									 template: 'Desea continuar vendiendo al mismo cliente'
								   });

								   confirmPopup.then(function(res) {
									 if(res) {
										   
										$location.path('/page2'); 
									 } else {
									   $location.path('/page3'); 
									 }
								   });
								   
								   
								   var alertPopup = $ionicPopup.alert({
								title: 'Mensaje',
								template: 'El producto fue agregado correctamente'
							});
							 
   return ingresar; 
  }
  
return service;
})

.factory('Modificar', function($http,$location,$ionicPopup){
  var service = {};
   service.mod = function(user,pass) {
								   var confirmPopup = $ionicPopup.confirm({
									 title: 'Mensaje',
									 template: '¿Esta Seguro que dese modificar el item?'
								   });

								   confirmPopup.then(function(res) {
									 if(res) {
										   
										$location.path('/page3'); 
									 } else {
									   $location.path('/page3'); 
									 }
								   });		   
					
							 
   return ingresar; 
  }
  
return service;
})

