(function() {
    'use strict';

    angular
        .module('happyBill')
        .service('TransactionsDataService', TransactionsDataService);

    /* @ngInject */
    function TransactionsDataService($resource) {
        var resource = $resource("/transactions");

        return resource;
    }
})();