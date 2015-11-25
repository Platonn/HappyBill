(function() {
    'use strict';

    angular
        .module('happyBill')
        .service('TransactionsAddDataService', TransactionsAddDataService);

    /* @ngInject */
    function TransactionsAddDataService($log, $q, $timeout) {
        this.add = add;

        ////////////////

        function add(transaction) {
        	var deferred = $q.defer();

        	//spike:
        	$timeout(function() {
        		deferred.resolve();	
        	},
        	300);
        	

        	return deferred.promise;
        }
    }
})();