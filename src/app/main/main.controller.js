(function() {
  'use strict';

  angular
    .module('happyBill')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1440161309414;
    vm.showToastr = showToastr;

    activate();

    function activate() {
     }
  }
})();
