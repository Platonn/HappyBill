(function() {
    'use strict';

    angular
        .module('happyBill')
        .service('CategoriesDataService', CategoriesDataService);

    /* @ngInject */
    function CategoriesDataService($resource) {
        var resource = $resource("/categories");

        return resource;
    }
})();