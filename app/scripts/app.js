'use strict';

/**
 * @ngdoc overview
 * @name frontEadApp
 * @description
 * # frontEadApp
 *
 * Main module of the application.
 */
angular
  .module('frontEadApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch','ui.utils.masks', 
    'ui.bootstrap','btorfs.multiselect'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
