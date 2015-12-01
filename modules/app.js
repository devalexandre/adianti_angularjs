var app = angular.module('progs', ['ngRoute','AdiantiService'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  });

});


app.controller('HomeController',HomeController);


function HomeController($scope,$http,$adianti) {

  $adianti.get('Home','home').then(
    function(res){
      $scope.title = res.data.title;
    }
  )


}


HomeController['$inject'] = ['$scope','$http','$adianti'];
