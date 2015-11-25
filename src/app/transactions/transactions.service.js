(function() {
    'use strict';

    angular
        .module('happyBill')
        .service('TransactionsService', TransactionsService);

    /* @ngInject */
    function TransactionsService(TransactionsDataService, $q) {
        this.getAllTransactions = getAllTransactions;
        this.getFilteredTransactions = getFilteredTransactions;
        this.filterByDateTransactions = filterByDateTransactions;

        var allTransactions = null;

        ////////////////

        function getAllTransactions(){
            var deferred = $q.defer();
            
            if(allTransactions){
                deferred.resolve(allTransactions);
            } else {
                TransactionsDataService.query().$promise
                .then(function(transactions) {
                    allTransactions = transactions;
                    deferred.resolve(allTransactions);
                });
            }

            return deferred.promise;
        }

        function getFilteredTransactions(categorySummaries, filters){
            var tempResult = filterSelectedCategoriesTransactions(categorySummaries);
            tempResult = filterByDateTransactions(tempResult, filters);
            return tempResult;
        }

        function filterSelectedCategoriesTransactions(categorySummaries){
            var selectedCategories = _.where(categorySummaries, { isSelected: true });
            var selectedCategoriesTransactions = _.chain(selectedCategories)
                .pluck('transactions')
                .flatten()
                .value();
                
            return selectedCategoriesTransactions;
        }        

        function filterByDateTransactions(transactions, filters){
            if(filters.date) {
                var startDate = filters.date.startDate;
                var endDate = filters.date.endDate;


                var result = _.chain(transactions)
                    .filter(function(transaction){
                        return (
                        	moment(transaction.date).isBetween(startDate, endDate, 'day') ||
                        	moment(transaction.date).isSame(startDate) ||
                        	moment(transaction.date).isSame(endDate)
                        );
                    })
                    .value();
                return result;
            } else {
                return [];
            }
        }
    }
})();