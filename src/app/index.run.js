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
    $httpBackend.whenGET('/nibybackend').respond(function(method,url,data) {
    console.log("Getting mocked backend");
    return [200, {myText: 'spike mocked backend text'}];
  });
  
    registerPassingThroughOtherHttpBackend($httpBackend);
  }

  function registerPassingThroughOtherHttpBackend($httpBackend){
    $httpBackend.whenGET(/.*/).passThrough();
    $httpBackend.whenPOST(/.*/).passThrough();
    $httpBackend.whenDELETE(/.*/).passThrough();
    $httpBackend.whenPUT(/.*/).passThrough();
  }


})();
