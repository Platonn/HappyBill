(function() {
    'use strict';

    angular
        .module('happyBill')
        .controller('MasterController', MasterController);

    /* @ngInject */
    function MasterController($window, $cookieStore, $scope, $log) {
        var vm = this;
        vm.mobileView = 992;
        vm.toggle = true;

        vm.getWidth = getWidth;
        vm.toggleSidebar = toggleSidebar;
        vm.watchWindowWidth = watchWindowWidth;
        
        activate();

        ////////////////

        function activate() {
            vm.watchWindowWidth();
        }

        function getWidth() {
            return $window.innerWidth;
        }

        function toggleSidebar() {
            vm.toggle = !vm.toggle;
            $cookieStore.put('toggle', vm.toggle);
        };

        function watchWindowWidth() {
            $scope.$watch(vm.getWidth, function(newValue, oldValue) {
                if (newValue >= vm.mobileView) {
                    if (angular.isDefined($cookieStore.get('toggle'))) {
                        vm.toggle = ! $cookieStore.get('toggle') ? false : true;
                    } else {
                        vm.toggle = true;
                    }
                } else {
                    vm.toggle = false;
                }
            });

            $window.onresize = function() {
                $scope.$apply();
            }
        }
    }
})();