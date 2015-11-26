(function() {
  'use strict';

  angular
    .module('happyBill')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('transactions', {
        url: '/transactions',
        templateUrl: 'app/transactions/transactions.html',
        controller: 'TransactionsController',
        controllerAs: 'transCtrl'
      })
        .state('transactions.create', {
          url: '/transactions/create',
          templateUrl: 'app/transactions/transactions-form.html'
        });

    $urlRouterProvider.otherwise('/');
  }

})();