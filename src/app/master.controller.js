(function() {
    'use strict';

    angular
        .module('happyBill')
        .controller('MasterController', MasterController);

    /* @ngInject */
    function MasterController() {
        var vm = this;
        vm.mobileView = 992;
        vm.toggleSidebar = toggleSidebar;
        vm.toggle = true;

        activate();

        ////////////////

        function activate() {

        }

        function toggleSidebar() {
            vm.toggle = !vm.toggle;
        };
    }
})();