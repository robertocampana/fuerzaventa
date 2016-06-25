angular.module('controllers', [])

.controller('WelcomeCtrl1', function($scope, $state, UserService, $ionicLoading) {

  //This method is executed when the user press the "Login with Google" button
  $scope.googleSignIn = function() {
    $ionicLoading.show({
      template: 'Ingresando....'
    });
			$ionicLoading.hide();
          $state.go('app.Clientes');
  };
})



.controller('exerciseTypeCtrl',function($scope,indoors,outdoors,setNulls, catagories){
    
    $scope.catagories = catagories;
	$scope.types = setNulls;
	$scope.changeData = function() {
        if($scope.itemsuper.text == "Dermocosmética") {
            $scope.types = indoors;
        } else if($scope.itemsuper.text == "Pañales") {
            $scope.types = outdoors;
        } else {
            $scope.types = setNulls;
        }
  
		
    }
})


.controller('cloudTabDefaultPageCtrl', function($scope) {
  
   $scope.graph = {};                        // Empty graph object to hold the details for this graph
  $scope.graph.labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];    // Add labels for the X-axis
  $scope.graph.series = ['Awake', 'Asleep'];  // Add information for the hover/touch effect

  
  $scope.graph.data = [                     // Add bar data, this will set your bars height in the graph
    //Awake
    [16, 15, 20, 12, 16, 12, 8],
    //Asleep
    [8, 9, 4, 12, 8, 12, 14]
  ];
  
  
  $scope.myJson = {  
  type : 'line' ,  
  series : [  
    { values : [ 54 , 23 , 34 , 23 , 43 ] },  
    { values : [ 10 , 15 , 16 , 20 , 40 ] }  
  ]  
};  
  
  console.log($scope.graph.data);
//   }]);
})




.controller("ExampleController", function($scope) {
 
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
 
})


.controller('WelcomeCtrl', ['$scope', '$location', 'Ingresar', function($scope, $location, Ingresar) {
 var ingreso_c ;
  $scope.cliente = {}
  $scope.Ingresar = function() {
	  Ingresar.Login($scope.cliente.usuario,$scope.cliente.contrasena);
  };
}])


.controller('DetallesCtrl', ['$scope', '$location', 'carrito', function($scope, $location, carrito) {
$scope.Carrito = function(){
carrito.car();
};

}])

.controller('AppCtrl', function($scope,$state,$ionicHistory){
	  $scope.Cerrar = function() {
          $state.go('welcome');
  };

    $scope.Estadisticas = function() {
          $state.go('app.estadisticas');
  };

      $scope.Inicio = function() {
          $state.go('app.Clientes');
              $ionicHistory.nextViewOptions({
                     disableBack: true,
                     disableAnimate: true
                    });
  };

     $scope.confirmar = function() {

          $state.go('app.confirmar');
              $ionicHistory.nextViewOptions({
                     disableBack: true,
                     disableAnimate: true
                    });
  };

       $scope.rutas = function() {

          $state.go('app.total');
              // $ionicHistory.nextViewOptions({
              //        disableBack: true,
              //        disableAnimate: true
              //       });
  };


})



.controller('modificarCtrl', function($scope, $state){
	  $scope.modificar = function() {
          $state.go('app.Clientes');
  };

})

.controller('rutasCtrl', function($scope, $state){
        $scope.visitados = function() {
          $state.go('app.visitados');
              $ionicHistory.nextViewOptions({
                     disableBack: true,
                     disableAnimate: true
                    });
  };


      $scope.pendientes = function() {
          $state.go('app.pendientes');
              $ionicHistory.nextViewOptions({
                     disableBack: true,
                     disableAnimate: true
                    });
  };


      $scope.todos = function() {
          $state.go('app.total');
             
  };

})


.controller('ProductosCtrl', ['$scope', '$location', 'Agregar', function($scope, $location, Agregar, $state) {

   $scope.cliente = {}
    $scope.modificar = function() {
           $state.go('app.Clientes');
   };

     $scope.save = function() {
    Agregar.carrito($scope.cliente.usuario,$scope.cliente.contrasena);
  };

              $scope.numberPickerObject = {
    inputValue: 0, //Optional 
    minValue: -9007199254740991,
    maxValue: 9007199254740991,
    precision: 3,  //Optional 
    decimalStep: 0.25,  //Optional 
    format: "WHOLE",  //Optional - "WHOLE" or "DECIMAL" 
    unit: "",  //Optional - "m", "kg", "℃" or whatever you want 
    titleLabel: 'Cantidad',  //Optional 
    setLabel: 'Aceptar',  //Optional 
    closeLabel: 'Cancelar',  //Optional 
    setButtonType: 'button-positive',  //Optional 
    closeButtonType: 'button-stable',  //Optional 
    callback: function (val) {    //Mandatory 
    timePickerCallback(val);
  }
};
       

        timePickerCallback = function (val) {
           if (typeof (val) === 'undefined') {
           $scope.cliente.cantidad = 0;
           $scope.cliente.cantidad2 = 0; 
           } else {
             $scope.cliente.cantidad = val;    // `val` will contain the selected time in epoch
             $scope.cliente.cantidad2 = val;    // `val` will contain the selected time in epoch
           }
        }; 
       

      $scope.Detalles = function() {
           $state.go('app.Detalles');
   };

}])
 .controller('ProductosCtrl1', function($scope, $state ){
 	 $scope.cliente = {}
 	  $scope.modificar = function() {
           $state.go('app.Clientes');
   };

     $scope.save = function() {
    Agregar.carrito($scope.cliente.usuario,$scope.cliente.contrasena);
  };

              $scope.numberPickerObject = {
    inputValue: 0, //Optional 
    minValue: -9007199254740991,
    maxValue: 9007199254740991,
    precision: 3,  //Optional 
    decimalStep: 0.25,  //Optional 
    format: "WHOLE",  //Optional - "WHOLE" or "DECIMAL" 
    unit: "",  //Optional - "m", "kg", "℃" or whatever you want 
    titleLabel: 'Cantidad',  //Optional 
    setLabel: 'Aceptar',  //Optional 
    closeLabel: 'Cancelar',  //Optional 
    setButtonType: 'button-positive',  //Optional 
    closeButtonType: 'button-stable',  //Optional 
    callback: function (val) {    //Mandatory 
    timePickerCallback(val);
  }
};
       

        timePickerCallback = function (val) {
           if (typeof (val) === 'undefined') {
           $scope.cliente.cantidad = 0;
           $scope.cliente.cantidad2 = 0; 
           } else {
             $scope.cliente.cantidad = val;    // `val` will contain the selected time in epoch
             $scope.cliente.cantidad2 = val;    // `val` will contain the selected time in epoch
           }
        }; 
       

   	  $scope.Detalles = function() {
           $state.go('app.Detalles');
   };

 })

 .controller('EstadisticasCtrl', function($scope, $state){
 	  $scope.modificar = function() {
           $state.go('app.Clientes');
   };
 })


.controller('visitadosCtrl', function($scope, $state){
    $scope.modificar = function() {
           $state.go('app.Clientes');
   };
 })

.controller('pendietnesCtrl', function($scope, $state){
    $scope.modificar = function() {
           $state.go('app.Clientes');
   };
 })

.controller('totalCtrl333', function($scope, $state){
    $scope.modificar = function() {
           $state.go('app.Clientes');
   };
 })




.controller('totalCtrl1', function($scope, $ionicLoading) {
    // Map Settings //
    
      var cities = [
    {
        city : 'Location 1',
        desc : 'Test',
        lat : -2.1165618,
        long : -79.899291,
    tipo : 'Visitados'
    },
    {
        city : 'Location 2',
        desc : 'Test',
        lat : -2.1499986,
        long : -79.9148069,
    tipo : 'Pendientes'
    },
    {
        city : 'Location 3',
        desc : 'Test',
        lat : -2.1262729,
        long : -79.9015501,
       tipo : 'Pendientes'
    },

    {
        city : 'Location 4',
        desc : 'Test',
        lat : -2.1652592,
        long : -79.8957129 ,
        tipo : 'Visitados'
    },
    {
        city : 'Location 5',
        desc : 'Test',
        lat : 52.241874,
        long : -0.883568,
        tipo : 'Visitados'    
    }
];



   // $scope.initialise = function() {




        var myLatlng = new google.maps.LatLng(-2.1632666, -79.8990766);
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
     navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                animation: google.maps.Animation.DROP,
                title: "My Location"
            });
        });
        $scope.map = map;

        //alert($scope.map);
        // Additional Markers //
        $scope.markers = [];
        var infoWindow = new google.maps.InfoWindow();
        var createMarker = function (info){
        var imagen = "";
        if (info.tipo == "Visitados") {
         
           imagen = '../img/visit.png';
        }

        if (info.tipo == "Pendientes") {
         
           imagen = '../img/pendient.png';
        }
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(info.lat, info.long),
                map: $scope.map,
                animation: google.maps.Animation.DROP,
                title: info.city,
                icon: imagen
            });
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });
            $scope.markers.push(marker);
        }  
        for (i = 0; i < cities.length; i++){
            createMarker(cities[i]);
        }

    //};
    //google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());
    google.maps.event.addDomListener(document.getElementById("map"));

})



.controller('totalCtrl', function($scope) {

 


  
 google.maps.event.addDomListener(window, 'load', initialize());


    function initialize() {
    
  var cities = [
    {
        city : 'Location 1',
        desc : 'Test',
        lat : -2.1165618,
        long : -79.899291,
    tipo : 'Visitados'
    },
    {
        city : 'Location 2',
        desc : 'Test',
        lat : -2.1499986,
        long : -79.9148069,
    tipo : 'Pendientes'
    },
    {
        city : 'Location 3',
        desc : 'Test',
        lat : -2.1262729,
        long : -79.9015501,
       tipo : 'Pendientes'
    },

    {
        city : 'Location 4',
        desc : 'Test',
        lat : -2.1652592,
        long : -79.8957129 ,
        tipo : 'Visitados'
    },
    {
        city : 'Location 5',
        desc : 'Test',
        lat : 52.241874,
        long : -0.883568,
        tipo : 'Visitados'    
    }
];


      var myLatlng = new google.maps.LatLng(-2.1632666, -79.8990766);
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
       
     navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                animation: google.maps.Animation.DROP,
                title: "My Location"
            });
        });

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        $scope.map = map;

       $scope.markers = [];
       
       
        var infoWindow = new google.maps.InfoWindow();
        var createMarker = function (info){    
          if (info.tipo == "Pendientes") {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(info.lat, info.long),
                map: $scope.map,
                animation: google.maps.Animation.DROP,
                title: info.city,
                icon: 'img/pendiente.png'
               // icon: $scope.imagen
            });
          }else{
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(info.lat, info.long),
                map: $scope.map,
                animation: google.maps.Animation.DROP,
                title: info.city,
                icon: 'img/visitadas.png'
                //icon: $scope.imagen
            });
          }

            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });
            $scope.markers.push(marker);
        }  
        for (i = 0; i < cities.length; i++){
            createMarker(cities[i]);
           
        }

       var flightPlanCoordinates = [
    new google.maps.LatLng(-2.1165618, -79.899291),
    new google.maps.LatLng(-2.1652592, -79.8957129)
  ]; 
        
        
        var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
        
       //var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    }
})



.controller('confrimarCtrl',  ['$scope', '$location', 'Vender', function($scope, $location, Vender) {
	 $scope.cliente = {}
  $scope.save = function() {

	  Vender.venta($scope.cliente.usuario,$scope.cliente.contrasena);
  };
   $scope.eliminar = function() {
	  Vender.eliminar($scope.cliente.usuario,$scope.cliente.contrasena);
  };

     $scope.Modificar = function() {
	  Vender.Modificar($scope.cliente.usuario,$scope.cliente.contrasena);
  };

}])


.controller('BusquedaCtrl', ['$scope', '$location', 'Agregar', function($scope, $location, Agregar) {
 var ingreso_c ;
  $scope.cliente = {}
  $scope.save = function() {
	  Agregar.carrito($scope.cliente.usuario,$scope.cliente.contrasena);
  };
}])



.controller('HomeCtrl', function($scope, UserService, $ionicActionSheet, $state, $ionicLoading){
	$scope.user = UserService.getUser();
	$scope.showLogOutMenu = function() {
		var hideSheet = $ionicActionSheet.show({
			destructiveText: 'Logout',
			titleText: 'Are you sure you want to logout? This app is awsome so I recommend you to stay.',
			cancelText: 'Cancel',
			cancel: function() {},
			buttonClicked: function(index) {
				return true;
			},
			destructiveButtonClicked: function(){
				$ionicLoading.show({
					template: 'Saliendo'
				});
				
					$ionicLoading.hide();
						$state.go('welcome');
				//google logout
			
			}
		});
	};
		  $scope.Productos = function() {
          $state.go('app.Productos');
  };
  		  $scope.confirmar = function() {
          $state.go('app.confirmar');
  };
	
})

;
