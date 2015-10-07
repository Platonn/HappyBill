(function() {
    'use strict';

    angular
        .module('happyBill')
        .controller('TransactionsController', TransactionsController);


    /* @ngInject */
    function TransactionsController($resource, $log, currencyPrecision, _, safeCurrencyMath) {
        var vm                      = this;
        vm.title                    = 'TransactionsController';
        vm.transactions             = [];
        vm.transactionsDisplayed    = [];

        vm.transactionsSummariesByCategory             = [];
        vm.transactionsSummariesByCategoryDisplayed    = [];

        /* //TODO
        vm.add          = add;
        vm.edit         = edit;
        vm.remove       = remove;
        */
        
        activate();

        ////////////////

        function activate() {
            var myResource = $resource('/transactions');
            myResource.query()
            .$promise.then(function(transactions) {

                bindTransactions(transactions);
                bindTransactionsSummariesByCategory(transactions);
            });
        }

        /* //TODO
        function add(){
            $log.warn("add() to be implemented!");  // TODO
        }

        function edit(transactionId){
            $log.warn("edit() to be implemented!"); // TODO
        }

        function remove(transactionId){
            $log.warn("remove() to be implemented!"); // TODO
        }
        */
    
        //private

        function bindTransactions(transactions) {
            vm.transactions          = [].concat(transactions);
            vm.transactionsDisplayed = [].concat(transactions);
        }

        function bindTransactionsSummariesByCategory(transactions) {
            var transactionsByCategory = _.groupBy(transactions, 'category');
            var transactionsSummariesByCategory = _.map(transactionsByCategory, function(transactions, category) {
                var result = {};
                result.amount = safeCurrencyMath.sumCollection(_.pluck(transactions, 'amount'));
                result.category = category;
                return result;
            });

            vm.transactionsSummariesByCategory          = [].concat(transactionsSummariesByCategory);
            vm.transactionsSummariesByCategoryDisplayed = [].concat(transactionsSummariesByCategory);
        }
    }
})();