var app = angular.module('progs', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  });

});


app.controller('HomeController',HomeController);


function HomeController($scope,$http) {
  
  $http.get('api/engine.php?class=Home&method=home').then(
    function(res){
      $scope.title = res.data.title;
    }
  )
 
  
}


HomeController['$inject'] = ['$scope','$http'];