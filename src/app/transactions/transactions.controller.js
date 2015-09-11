(function() {
    'use strict';

    angular
        .module('happyBill')
        .controller('TransactionsController', TransactionsController);


    /* @ngInject */
    function TransactionsController($resource, $log) {
        var vm = this;
        vm.title = 'TransactionsController';
        vm.transactions = [];

        vm.add          = add;
        vm.edit         = edit;
        vm.remove       = remove;

        activate();

        ////////////////

        function activate() {
            var myResource = $resource('/transactions');
            myResource.query()
            .$promise.then(function(transactions) {
                console.log("GOT mocked backend!!!");
                vm.transactions = transactions;
            });
        }

        function add(){
            $log.warn("add() to be implemented!");  // TODO
        }

        function edit(transactionId){
            $log.warn("edit() to be implemented!"); // TODO
        }

        function remove(transactionId){
            $log.warn("remove() to be implemented!"); // TODO
        }
    }
})();