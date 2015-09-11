(function() {
  'use strict';

  angular
    .module('happyBill')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $httpBackend) {

  // Catch-all pass through for all other requests
  


    registerMockedHttpBackend($httpBackend);
    
    
    $log.debug('runBlock end');
  }

  function registerMockedHttpBackend($httpBackend){
    // mock backend:
    $httpBackend.whenGET('/transactions')
      .respond(function(method,url,data) {
        return [200, getMockTransactions()];
      }
    );
  
    registerPassingThroughOtherHttpBackend($httpBackend);
  }

  function registerPassingThroughOtherHttpBackend($httpBackend){
    $httpBackend.whenGET(/.*/).passThrough();
    $httpBackend.whenPOST(/.*/).passThrough();
    $httpBackend.whenDELETE(/.*/).passThrough();
    $httpBackend.whenPUT(/.*/).passThrough();
  }


  // functions with mocked backend
  function getMockTransactions() {
    var result = [
      {
        id:           1,
        category:     'Jedzenie',
        description:  'Owoce',
        date:         '25.08.2015',
        amount:       '25'
      },
      {
        id:           2,
        category:     'Ubrania',
        description:  'Sukienki',
        date:         '25.08.2015',
        amount:       '140'
      },
      {
        id:           3,
        category:     'Remonty',
        description:  'Zestaw kluczy',
        date:         '25.08.2015',
        amount:       '60'
      }
    ];
    return result;
  }


})();
