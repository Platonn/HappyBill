(function() {
    'use strict';

    angular
        .module('happyBill')
        .controller('TransactionsController', TransactionsController);


    /* @ngInject */
    function TransactionsController($resource) {
        var vm = this;
        vm.title = 'TransactionsController';

        activate();

        ////////////////

        function activate() {
            var myResource = $resource('/nibybackend');
            myResource.get()
            .$promise.then(function(responseObject) {
                vm.title = responseObject.myText;
                console.log("GOT mocked backend!!! " + responseObject.myText);
            });
        }
    }
})();