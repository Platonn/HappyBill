(function() {
    'use strict';

    angular
        .module('happyBill')
        .controller('CategoriesController', CategoriesController);


    /* @ngInject */
    function CategoriesController($scope) {
        var vm                      = this;
        vm.transactionsAll          = [];
        vm.filters = {
            date: null
        };

        vm.mainCategories = [];

        activate();

        ////////////////

        function activate() {
            spike();
        }

        function spike(){
            $scope.my_data = [
                {
                    label: 'Rachunki',
                    children: [
                        {label: 'Rachunek za prąd'},
                        {label: 'Rachunek za Internet'},
                        {label: 'Rachunek za czynsz'},
                        {label: 'Rachunek za wodę i lokal'},
                        {label: 'Rachunek za śmieci'},
                        {label: 'Rachunek za gaz'},
                        {label: 'Doładowanie telefonu'},
                    ]
                },
                {
                    label:'Bieżące',
                    children: [
                        {label: 'Jedzenie'},
                        {label: 'Jedzenie na mieście'},
                        {label: 'Paliwo'},
                        {label: 'Komunikacja miejska'},
                        {label: 'Taksówki'},
                        {label: 'Nextbike'},
                        {label: 'Wyjścia razem'},
                        {label: 'Wyjścia ze znajomymi'},
                        {label: 'Kosmetyki'},
                        {label: 'Środki higieny domowej'},
                        {label: 'Papier toaletowy i chusteczki'},
                        {label: 'Fryzjer'},
                    ]
                },
                {
                    label:'Zdrowie',
                    children: [
                        {label: 'Dentysta'},
                        {label: 'Leki'},
                    ]
                },
                {
                    label:'Prezenty',
                    children: [
                        {label: 'Prezenty dla rodziny'},
                        {label: 'prezenty dla znajomych'},
                    ]
                },
                {
                    label:'Nieprzewidziane, długoterminowe',
                    children: [
                        {label: '?'}
                    ]
                },
                {
                    label:'Jeszcze nieprzypisane',
                    children: [
                        {label: 'Jedzenie'},
                        {label: 'Artykuły papiernicze'},
                        {label: 'Biżuteria'},
                        {label: 'Remonty'},
                        {label: 'Ubrania'},
                        {label: 'Soczewki'},
                        {label: 'Artykuły medyczne'},
                        {label: 'Sprzęt audio'},
                        {label: 'Sprzęt elektroniczny'},
                        {label: 'Fotografie'},
                        {label: 'Sprzęt turystyczny'},
                        {label: 'Pocztówki i znaczki'},
                        {label: 'Fotograf ślubny'},
                        {label: 'Święta'},
                    ]
                }
            ];
        }
    }
})();