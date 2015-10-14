(function() {
    'use strict';

    angular
        .module('happyBill.translate')
        .config(config);

    /* @ngInject */
    function config($translateProvider) {
        
        // translations
        translationsPL($translateProvider);

        // Static files are not in use now; if done - remove translationsPL then.
		// useStaticFilesLoader($translateProvider);

	    $translateProvider.preferredLanguage('PL');

		useLocalStorage($translateProvider);
    }

	function useLocalStorage($translateProvider){
		$translateProvider.useLocalStorage();
	}

	function translationsPL($translateProvider) {
		$translateProvider.translations('PL', 
        	{
				"APPNAME": "HappyBill",

				"ROUTES": {
					"TRANSACTIONS": "Transakcje",
					"CATEGORIES": "Kategorie",
				},

				"TRANSACTIONS": {
					"TRANSACTIONS": "Transakcje",
					"BY_CATEGORY": "(według kategorii)",
					"ALL": "(wszystkie)",
					"CATEGORY": "Kategoria",
					"DESCRIPTION": "Opis",
					"DATE": "Data",
					"DATE_FROM": "Data od",
					"DATE_TO": "Data do",
					"AMOUNT": "Kwota",
					"AMOUNT_FROM": "Kwota od",
					"AMOUNT_TO": "Kwota do",
					"INCOME": "Przychód",
					"OUTCOME": "Wydatek",
					"ADD": "Dodaj nową transakcję",
					"CHOOSE_DATERANGE": "Wybierz zakres dat",
					"SEARCH": "Szukaj"
				},

				"COMMON": {
					"ACTIONS": {
						"ADD": "Dodaj",
						"EDIT": "Edytuj",
						"REMOVE": "Usuń",
						"SEARCH": "Szukaj",
					},
				},

			}
        );
	}


})();
