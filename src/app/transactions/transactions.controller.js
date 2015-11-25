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
        
        vm.dateRangePickerOpts = {
            locale: {
               
            },
            eventHandlers: {
                'apply.daterangepicker': function() { bindCategoriesSummariesAndFilteredTransactions() }
            }
        };

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
            initDateFilter();
            initTransactions();
        }

        function initDateFilter(){
            
            //var startOfCurrentMonth = moment().startOf('month'); //spike - to powinno byc
            var startOfCurrentMonth = moment('2000-01-01');
            var endOfCurrentMonth = moment().endOf('month');

            vm.filters.date = {
                startDate: startOfCurrentMonth,
                endDate: endOfCurrentMonth
            };
        }

        function initTransactions(){
            TransactionsService.getAllTransactions()
                .then(function(transactions) {
                    vm.transactionsAll = transactions;
                    bindCategoriesSummariesAndFilteredTransactions();
                });
        }

        function bindCategoriesSummariesAndFilteredTransactions() {
            var filteredTransactions = TransactionsService.filterByDateTransactions(vm.transactionsAll, vm.filters);
            bindCategorySummaries(filteredTransactions);
            bindFilteredTransactions();
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
            summariesByCategory = _.sortBy(summariesByCategory, function(summaryByCategory){
                return -summaryByCategory.amount; // sort by amount desc ( == minus asc)
            })
            return summariesByCategory;
        }
    }
})();