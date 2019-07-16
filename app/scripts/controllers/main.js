'use strict';

/**
 * @ngdoc function
 * @name frontEadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontEadApp
 */

 
var app = angular.module('frontEadApp',['datatables']);
app.controller('crudController',function ($scope,$http){
  $scope.fetchData = function (){
    $http.get('https://apiead.herokuapp.com/api/clientes').success(function(data){
     $scope.namesData = data;
     
});
  };
});
  

