angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider


 .state('items', {
    url: "/page3",
    abstract: true,
    templateUrl: "templates/items.html",
    controller: 'itemsCtrl'
  })

   // .state('items', {
   //    url: '/page3',
   //    templateUrl: 'templates/items.html',
   //      controller: 'itemsCtrl'
   //  })

  .state('busqueda', {
    url: '/page2', 
	templateUrl: 'templates/busqueda.html',
	controller:'busquedaCtrl'
    
  })
    .state('Modificar', {
    url: '/page15', 
	templateUrl: 'templates/Modificar.html',
	controller:'ModificarCtrl'
    
  })
    .state('descripciN', {
    url: '/page8',
        templateUrl: 'templates/descripciN.html',
        controller: 'descripciNCtrl'
      
  })




.state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })
.state('menu.loginCtrl', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })
.state('menu.ayuda', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ayuda.html',
        controller: 'ayuda'
      }
    }
  })
.state('menu.acerca', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acerca.html',
        controller: 'ayuda'
      }
    }
  })



$urlRouterProvider.otherwise('/side-menu21/page6')
});