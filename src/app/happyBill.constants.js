/* global malarkey:false, toastr:false, moment:false, _:false */
(function() {
  'use strict';

  angular
    .module('happyBill')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('_', _);

})();
