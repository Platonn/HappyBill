(function() {
    'use strict';

    angular
        .module('happyBill')
        .controller('CategoriesController', CategoriesController);


    /* @ngInject */
    function CategoriesController(CategoriesService, _, $log) {
        var vm          = this;
        vm.categories   = [];

        vm.categoryClickCallback = categoryClickCallback;

        activate();

        ////////////////

        function categoryClickCallback(branch){
            if(isLeaf(branch)){ 
                $log.debug(branch.label); //spike
            }
        }

        function activate() {
            CategoriesService.getCategories(onLoadCategories);
        }

        function onLoadCategories(categories){
            vm.categories = categories;
        }

        function isLeaf(node){
            var result = _.isEmpty(node.children);
            return result;
        }
    }
})();