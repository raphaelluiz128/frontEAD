'use strict';

/**
 * @ngdoc function
 * @name frontEadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontEadApp
 */

 
var app = angular.module('frontEadApp');


app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.clientes = {};
  var baseUrl = 'https://apiead.herokuapp.com/api/clientes';

  $http.get(baseUrl).then(function(response) {
    $scope.clientes = response.data;
    console.log($scope.clientes);
  }, function(err) {
    console.log(err);
  });


  $scope.remove = function(cliente){
    swal({
        title:"Deseja realmente excluir?",
        type:"warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim!",
        cancelButtonText: "Não!",
        closeOnConfirm: false
    },function(isConfirm){
        if(isConfirm){
            var key = $scope.clientes.indexOf(cliente);
            cliente.deleteById({id:cliente.clienteId}).$promise.then(function(res,err){
                if(res){
                    if(key !== -1){
                        $scope.clientes.splice(key,1);
                        swal("Removido!", " Removido com Sucesso! ", "success");
                    }
                }
            });
        }
    });
};



}]);

 