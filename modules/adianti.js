//Criando o service
var app = angular.module('AdiantiService', []);

app.service('$adianti', function($http) {


  this.get = function ($class,$method = null) {

  if($method != null){
  return $http.get('api/engine.php?class='+$class+'&method='+$method);
  }else{
  return $http.get('api/engine.php?class='+$class);
  }


  }
});
