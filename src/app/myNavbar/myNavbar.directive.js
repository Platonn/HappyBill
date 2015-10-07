(function() {
    'use strict';

    angular
        .module('happyBill')
        .directive('myNavbar', myNavbar);

    /** @ngInject */
    function myNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/myNavbar/myNavbar.html',
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
