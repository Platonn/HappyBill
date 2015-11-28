(function() {
    'use strict';

    angular
        .module('happyBill')
        .controller('CategoriesController', CategoriesController);


    /* @ngInject */
    function CategoriesController(_, $log) {
        var vm                      = this;
        vm.transactionsAll          = [];
        vm.filters = {
            date: null
        };

        vm.categories = [];
        vm.categoriesTreeControl = {};
        vm.categoryClickCallback = categoryClickCallback; 

        activate();

        ////////////////

        function categoryClickCallback(branch){
            if(isLeaf(branch)){ 
                $log.debug(branch.label); //spike
            }
        }

        function activate() {
            var categories = getCategories();
            categories = sortNodesList(categories);
            vm.categories = categories; 
        }

        function sortNodesList(nodesList){
            nodesList = _.sortBy(nodesList, 'label');
            for (var i in nodesList) {
                nodesList[i].children = sortNodesList(nodesList[i].children);    
            }
            return nodesList;
        }

        function getCategories(){
            var result = [
                {
                    label: 'Rachunki', icon: 'fa fa-files-o fa-fw',
                    children: [
                        {label: 'Rachunek za prąd', icon: 'fa fa-flash fa-fw'},
                        {label: 'Rachunek za Internet', icon: 'fa fa-wifi fa-fw'},
                        {label: 'Rachunek za fundusz remontowy', icon: 'fa fa-home fa-fw'},
                        {label: 'Rachunek za wodę i lokal', icon: 'fa fa-tint fa-fw'},
                        {label: 'Rachunek za śmieci', icon: 'fa fa-trash fa-fw'},
                        {label: 'Rachunek za gaz', icon: 'fa fa-fire fa-fw'},
                        {label: 'Doładowanie telefonu', icon: 'fa fa-phone fa-fw'},
                    ]
                },
                {
                    label:'Bieżące', icon: 'fa fa-shopping-bag fa-fw',
                    children: [
                        {label: 'Jedzenie', icon: 'fa fa-cutlery fa-fw'},
                        {label: 'Jedzenie na mieście', icon: 'fa fa-cutlery fa-fw'},
                        {label: 'Paliwo', icon: 'fa fa-car fa-fw'},
                        {label: 'Komunikacja miejska', icon: 'fa fa-subway fa-fw'},
                        {label: 'Taksówki', icon: 'fa fa-taxi fa-fw'},
                        {label: 'Nextbike', icon: 'fa fa-bicycle fa-fw'},
                        {label: 'Wyjścia razem', icon: 'fa fa-coffee fa-fw'},
                        {label: 'Wyjścia ze znajomymi', icon: 'fa fa-beer fa-fw'},
                        {label: 'Kosmetyki', icon: 'fa fa-shopping-basket fa-fw'},
                        {label: 'Środki higieny domowej', icon: 'fa fa-shopping-basket fa-fw'},
                        {label: 'Papier toaletowy i chusteczki', icon: 'fa fa-shopping-basket fa-fw'},
                        {label: 'Fryzjer', icon: 'fa fa-scissors fa-fw'},
                        {label: 'Artykuły papiernicze', icon: 'fa fa-paperclip fa-fw'},

                    ]
                },
                {
                    label:'Zdrowie', icon: 'fa fa-heartbeat fa-fw', 
                    children: [
                        {label: 'Lekarze prywatni', icon: 'fa fa-user-md fa-fw'},
                        {label: 'Leki', icon: 'fa fa-medkit fa-fw'},
                        {label: 'Artykuły medyczne', icon: 'fa fa-medkit fa-fw'},
                    ]
                },
                {
                    label:'Prezenty', icon: 'fa fa-gift fa-fw',
                    children: [
                        {label: 'Prezenty dla rodziny', icon: 'fa fa-gift fa-fw',},
                        {label: 'Prezenty dla znajomych', icon: 'fa fa-gift fa-fw',},
                    ]
                },
                {
                    label:'Nieprzewidziane, długoterminowe', icon: 'fa fa-calendar fa-fw',
                    children: [
                        //{label: 'Drogi sprzęt', icon: 'fa fa-money fa-fw'}
                    ]
                },
                {
                    label:'Jeszcze nieprzypisane', icon: 'fa fa-question-circle fa-fw',
                    children: [
                        {label: 'Biżuteria', icon: 'fa fa-diamond fa-fw'},
                        {label: 'Remonty', icon: 'fa fa-wrench fa-fw'},
                        {label: 'Ubrania', icon: 'fa fa-shopping-bag fa-fw'},
                        {label: 'Soczewki', icon: 'fa fa-eye fa-fw'},
                        {label: 'Sprzęt audio', icon: 'fa fa-volume-up fa-fw'},
                        {label: 'Sprzęt elektroniczny', icon: 'fa fa-plug fa-fw'},
                        {label: 'Fotografie', icon: 'fa fa-camera fa-fw'},
                        {label: 'Sprzęt turystyczny', icon: 'fa fa-picture-o fa-fw'},
                        {label: 'Pocztówki i znaczki', icon: 'fa fa-envelope-o fa-fw'},
                        {label: 'Fotograf ślubny', icon: 'fa fa-camera fa-fw'},
                        {label: 'Święta', icon: 'fa fa-tree fa-fw'},
                    ]
                },
                {
                    label:'Przychody', icon: 'fa fa-money fa-fw',
                    children: [
                        {label: 'Stypendia', icon: 'fa fa-money fa-fw'},
                        {label: 'Praca Krzyś', icon: 'fa fa-money fa-fw'},
                        {label: 'Korepetycje Iza', icon: 'fa fa-money fa-fw'},
                        {label: 'Inne', icon: 'fa fa-money fa-fw'},

                    ]
                },
            ];
            return result;
        }

        function isLeaf(node){
            var result = _.isEmpty(node.children);
            return result;
        }
    }
})();