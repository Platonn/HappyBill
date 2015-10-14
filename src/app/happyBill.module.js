(function() {
  'use strict';

  angular
    .module('happyBill', [
        	// angular's:
        	'ngResource', 
        	'ui.router', 
        	'mgcrea.ngStrap',
        	'ngCookies',

        	// 3rd party:
        	'frapontillo.bootstrap-switch',
            'smart-table',
            'underscore',
            'daterangepicker',

            //my modules
            'happyBill.translate',
            'happyBill.safeCurrencyMath',

            
        ]
    );

})();
