(function() {
    'use strict';

    angular
        .module('happyBill')
        .controller('TransactionsController', TransactionsController);


    /* @ngInject */
    function TransactionsController(TransactionsService, TransactionsDataService, $scope, $log, currencyPrecision, _, safeCurrencyMath) {
        var vm                      = this;
        vm.transactionsAll          = [];
        vm.filters = {
            date: null
        };
        $scope.filters = vm.filters; //for watch
        
        vm.categorySummariesDisplayed   = [];
        vm.categorySummariesSafeSrc     = [];
        vm.filteredTransactionsDisplayed  = [];
        vm.filteredTransactionsSafeSrc    = [];


        vm.bindFilteredTransactions = bindFilteredTransactions;

        activate();

        ////////////////
        
        function bindFilteredTransactions(){
            vm.filteredTransactionsSafeSrc    = TransactionsService.getFilteredTransactions(vm.categorySummariesSafeSrc, vm.filters);
            vm.filteredTransactionsDisplayed  = angular.copy(vm.filteredTransactionsSafeSrc);
        }

        function activate() {
            initTransactions();
        }

        $scope.$watchCollection('filters', function(newValue, oldValue) {
            bindFilteredTransactions();
        });

        function initTransactions(){
            TransactionsDataService.query().$promise
                .then(function(transactionsAll) {
                    vm.transactionsAll = transactionsAll;
                    bindCategorySummaries(vm.transactionsAll);
                });
        }

        function bindCategorySummaries(transactions) {
            var transactionsByCategory  = _.groupBy(transactions, 'category');
            vm.categorySummariesSafeSrc = getSummariesByCategory(transactionsByCategory);
            vm.categorySummariesDisplayed = angular.copy(vm.categorySummariesSafeSrc);
        }

        function getSummariesByCategory(transactionsByCategory){
            var summariesByCategory = _.map(transactionsByCategory, function(transactions, category) {
                var result = {};
                result.category     = category;
                result.amount       = safeCurrencyMath.sumCollection(_.pluck(transactions, 'amount'));
                result.transactions = transactions; 
                return result;
            });
            return summariesByCategory;
        }
    }
})();