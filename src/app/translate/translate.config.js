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

		useLocalStorage($translateProvider)
    }

	function useStaticFilesLoader($translateProvider) {
		$translateProvider.useStaticFilesLoader({
			prefix: '/assets/languages/',
			suffix: '.json'
		});
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
					"AMOUNT": "Kwota",
					"INCOME": "Przychód",
					"OUTCOME": "Wydatek",
					"ADD": "Dodaj nową transakcję",
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
