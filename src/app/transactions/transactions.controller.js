(function() {
    'use strict';

    angular
        .module('happyBill')
        .controller('TransactionsController', TransactionsController);


    /* @ngInject */
    function TransactionsController($resource, $log) {
        var vm                      = this;
        vm.title                    = 'TransactionsController';
        vm.transactions             = [];
        vm.transactionsDisplayed    = [];

        vm.add          = add;
        vm.edit         = edit;
        vm.remove       = remove;

        activate();

        ////////////////

        function activate() {
            /* //spike
            var myResource = $resource('/transactions');
            myResource.query()
            .$promise.then(function(transactions) {
                console.log("GOT mocked backend!!!");
                vm.transactions          = [].concat(transactions);
                vm.transactionsDisplayed = [].concat(transactions);
            });
            */

            var transactions= [
                {
                    id:           1,
                    category:     'Jedzenie MOCK',
                    description:  'Owoce',
                    date:         '25.08.2015',
                    amount:       '25'
                },
                {
                    id:           2,
                    category:     'Ubrania MOCK',
                    description:  'Sukienki',
                    date:         '25.08.2015',
                    amount:       '140'
                },
                {
                    id:           3,
                    category:     'Remonty MOCK',
                    description:  'Zestaw kluczy',
                    date:         '25.08.2015',
                    amount:       '60'
                }
            ];

            vm.transactions          = [].concat(transactions);
            vm.transactionsDisplayed = [].concat(transactions);
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