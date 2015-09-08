(function() {
    'use strict';

    angular
        .module('happyBill')
        .controller('TransactionsController', TransactionsController);


    /* @ngInject */
    function TransactionsController() {
        var vm = this;
        vm.title = 'TransactionsController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();