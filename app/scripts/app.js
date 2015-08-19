'use strict';

/**
 * @ngdoc overview
 * @name customerAppApp
 * @description
 * # customerAppApp
 *
 * Main module of the application.
 */
var app = angular
  .module('customerAppApp', [
    'ngAnimate',
    'ngRoute',
  ]);
  
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/customers',
            {
                controller: 'CustomersController',
                templateUrl: 'views/customers.html'
            })
       //Define a route that has a route parameter in it (:customerID)
      .when('/customerorders/:customerID',
            {
                controller: 'CustomerOrdersController',
                templateUrl: 'views/customerOrders.html'
            })
      .otherwise({
        redirectTo: '/'
      });
  });

