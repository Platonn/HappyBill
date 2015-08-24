(function() {
  'use strict';

  angular
    .module('happyBill')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
