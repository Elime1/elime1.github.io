angular.module( 'ot-resources.home', [])

.config(function config($stateProvider) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeController',
        templateUrl: 'app/home/home.tpl.html'
      }
    }
  });
})

.controller('HomeController', function($scope) {


})

;
