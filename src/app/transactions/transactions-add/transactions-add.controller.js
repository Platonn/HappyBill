(function() {
    'use strict';

    angular
        .module('happyBill')
        .controller('TransactionsAddController', TransactionsAddController);

    /* @ngInject */
    function TransactionsAddController(TransactionsAddDataService, $scope, $log) {
        var vm = this;
        vm.add = add;
        vm.hasError = hasError;
        vm.hasSuccess = hasSuccess; 

        vm.transaction = $scope.transactionForm;

        activate();

        ////////////////

        var lastDate = null;

        function activate() {
        	resetFields();
        }

		function add(){
			vm.transaction.submitted = true;
			if($scope.transactionForm.$valid){
				TransactionsAddDataService.add(vm.transaction).then(function(){
					toastr.success('Spike: dodano transackcję');
					lastDate = vm.transaction.date;
					resetFields();
					$scope.transactionForm.$setUntouched();
				})
			} else {
				toastr.error('Spike: Nie dodano transakcji');
			}
		}

		function hasError(formField){
			var isInvalid = formField.$invalid;
			var isTouchedOrSubmitted = formField.$touched || vm.transaction.submitted;
			return isTouchedOrSubmitted && isInvalid;
		}

		function hasSuccess(formField){
			var isValid = formField.$valid;
			var isTouchedOrSubmitted = formField.$touched || vm.transaction.submitted;
			return isTouchedOrSubmitted && isValid;
		}

        function resetFields(){
        	vm.transaction = {
	        	category: '',
	        	description: '',
	        	date: lastDate,
	        	amount: '',
	        	type: 'outcome'
	        };
	        vm.transaction.submitted = false;
        }
    }
})();