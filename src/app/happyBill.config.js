(function() {
  'use strict';

  angular
    .module('happyBill')
    .config(config);

  /** @ngInject */
  function config($logProvider, $provide, toastr) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;

    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
  }

})();
