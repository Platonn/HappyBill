(function() {
    'use strict';

    angular
        .module('happyBill')
        .directive('hbNavbar', hbNavbar);

    /** @ngInject */
    function hbNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/hbNavbar/hbNavbar.html',
            scope: {
                navbarCollapsed: '='
            },
            controller: NavbarController,
            controllerAs: 'navbarCtrl', // 'vm', spike
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController() {
            var vm = this;
            vm.navbarCollapsed = true; // "vm.navbarCollapsed" is avaible by directive option "bindToController: true"
            
            vm.toggleNavbar = toggleNavbar;

            activate();

            ////////////////

            function toggleNavbar() {
                vm.navbarCollapsed = !vm.navbarCollapsed;
            }

            function activate() {
            }    
        }
    }

})();
