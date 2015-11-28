(function() {
    'use strict';

    angular
        .module('happyBill')
        .service('CategoriesService', CategoriesService);

    /* @ngInject */
    function CategoriesService(CategoriesDataService, _, $q) {
        this.getCategories = getCategories;

        var allCategories = [];
        ////////////////

        function getCategories(onLoadCallback) {
            if(_.isEmpty(allCategories) == false){
            	onLoadCallback(allCategories);
            } else {
                CategoriesDataService.query().$promise
                .then(function(categories) {
                    allCategories = transformCategories(categories);
                    onLoadCallback(allCategories);
                });
            }
        }

        function transformCategories(categories){
        	var result = sortNodesList(categories);
        	return result;
        }

        function sortNodesList(nodesList){
            nodesList = _.sortBy(nodesList, 'label');
            for (var i in nodesList) {
                nodesList[i].children = sortNodesList(nodesList[i].children);    
            }
            return nodesList;
        }
    }
})();