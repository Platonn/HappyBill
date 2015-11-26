(function() {
    'use strict';

    angular
        .module('happyBill.safeCurrencyMath')
        .service('safeCurrencyMath', safeCurrencyMath);

    /* @ngInject */
    function safeCurrencyMath(currencyPrecision, _) {
        this.sumCollection = sumCollection;
        this.getPercentage = getPercentage;
        
        ///////////////

        // avoids floating point errors by multiplicating elements by precisionFactor, doing addition and diving result then;
        function sumCollection(collection) {
        	var precisionFactor = Math.pow(10, currencyPrecision);
            var partialResult = _.reduce(collection, function(sum, x) {
                return sum + (x * precisionFactor);
            }, 0);
            var result = partialResult / precisionFactor;
            return result;
        }

        function getPercentage(amount, total){
            return window.Math.round(100*amount/total);
        }
    }
})();
