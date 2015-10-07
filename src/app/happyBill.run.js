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
      .respond(function() {
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
        "id": 0,
        "amount": 9.47,
        "category": "Prezenty dla znajomych",
        "description": "proident officia est",
        "date": "2014-10-31",
        "isExpense": true
      },
      {
        "id": 1,
        "amount": 13.24,
        "category": "Jedzenie",
        "description": "amet mollit nostrud",
        "date": "2014-12-16",
        "isExpense": true
      },
      {
        "id": 2,
        "amount": 8.99,
        "category": "Jedzenie",
        "description": "duis amet laborum",
        "date": "2015-05-14",
        "isExpense": true
      },
      {
        "id": 3,
        "amount": 10.56,
        "category": "Ubrania",
        "description": "qui aute laborum",
        "date": "2015-04-27",
        "isExpense": true
      },
      {
        "id": 4,
        "amount": 7.6,
        "category": "Prezenty dla znajomych",
        "description": "consequat occaecat elit",
        "date": "2014-06-06",
        "isExpense": true
      },
      {
        "id": 5,
        "amount": 5.16,
        "category": "Jedzenie",
        "description": "nisi labore voluptate",
        "date": "2014-01-10",
        "isExpense": true
      },
      {
        "id": 6,
        "amount": 10.2,
        "category": "Ubrania",
        "description": "cupidatat velit irure",
        "date": "2015-04-23",
        "isExpense": true
      },
      {
        "id": 7,
        "amount": 2.52,
        "category": "Ubrania",
        "description": "mollit ad elit",
        "date": "2014-06-25",
        "isExpense": true
      },
      {
        "id": 8,
        "amount": 1.8,
        "category": "Ubrania",
        "description": "nisi exercitation ea",
        "date": "2015-07-07",
        "isExpense": true
      },
      {
        "id": 9,
        "amount": 4.6,
        "category": "Prezenty dla znajomych",
        "description": "anim elit commodo",
        "date": "2015-04-27",
        "isExpense": true
      },
      {
        "id": 10,
        "amount": 3.04,
        "category": "Jedzenie",
        "description": "esse nisi aute",
        "date": "2014-04-06",
        "isExpense": true
      },
      {
        "id": 11,
        "amount": 11.79,
        "category": "Komunikacja miejska",
        "description": "velit minim irure",
        "date": "2014-09-30",
        "isExpense": true
      },
      {
        "id": 12,
        "amount": 2.45,
        "category": "Komunikacja miejska",
        "description": "enim in id",
        "date": "2014-10-27",
        "isExpense": true
      },
      {
        "id": 13,
        "amount": 12.71,
        "category": "Jedzenie",
        "description": "occaecat ad nisi",
        "date": "2014-12-20",
        "isExpense": true
      },
      {
        "id": 14,
        "amount": 5.47,
        "category": "Komunikacja miejska",
        "description": "commodo dolore aliquip",
        "date": "2014-06-23",
        "isExpense": true
      },
      {
        "id": 15,
        "amount": 14.27,
        "category": "Jedzenie",
        "description": "exercitation sint consequat",
        "date": "2015-08-13",
        "isExpense": true
      },
      {
        "id": 16,
        "amount": 2.01,
        "category": "Prezenty dla znajomych",
        "description": "laboris sunt amet",
        "date": "2014-06-06",
        "isExpense": true
      },
      {
        "id": 17,
        "amount": 1.58,
        "category": "Komunikacja miejska",
        "description": "esse exercitation quis",
        "date": "2015-02-27",
        "isExpense": true
      },
      {
        "id": 18,
        "amount": 8.32,
        "category": "Prezenty dla znajomych",
        "description": "do tempor est",
        "date": "2015-02-24",
        "isExpense": true
      },
      {
        "id": 19,
        "amount": 2.29,
        "category": "Komunikacja miejska",
        "description": "ipsum ea ullamco",
        "date": "2015-07-11",
        "isExpense": true
      },
      {
        "id": 20,
        "amount": 12.23,
        "category": "Ubrania",
        "description": "adipisicing Lorem cupidatat",
        "date": "2015-01-26",
        "isExpense": true
      },
      {
        "id": 21,
        "amount": 13.85,
        "category": "Ubrania",
        "description": "irure eiusmod sit",
        "date": "2014-09-07",
        "isExpense": true
      },
      {
        "id": 22,
        "amount": 3.45,
        "category": "Komunikacja miejska",
        "description": "ex sint dolor",
        "date": "2014-07-02",
        "isExpense": true
      },
      {
        "id": 23,
        "amount": 4.56,
        "category": "Jedzenie",
        "description": "dolore quis nostrud",
        "date": "2014-04-24",
        "isExpense": true
      },
      {
        "id": 24,
        "amount": 13.54,
        "category": "Prezenty dla znajomych",
        "description": "proident in deserunt",
        "date": "2014-03-07",
        "isExpense": true
      },
      {
        "id": 25,
        "amount": 6.41,
        "category": "Prezenty dla znajomych",
        "description": "est consectetur amet",
        "date": "2015-03-21",
        "isExpense": true
      },
      {
        "id": 26,
        "amount": 7.39,
        "category": "Komunikacja miejska",
        "description": "excepteur incididunt anim",
        "date": "2015-06-09",
        "isExpense": true
      },
      {
        "id": 27,
        "amount": 12.76,
        "category": "Prezenty dla znajomych",
        "description": "amet proident qui",
        "date": "2014-08-03",
        "isExpense": true
      },
      {
        "id": 28,
        "amount": 8.6,
        "category": "Prezenty dla znajomych",
        "description": "est velit dolor",
        "date": "2015-07-12",
        "isExpense": true
      },
      {
        "id": 29,
        "amount": 12.71,
        "category": "Jedzenie",
        "description": "sit est laborum",
        "date": "2015-05-07",
        "isExpense": true
      },
      {
        "id": 30,
        "amount": 1.13,
        "category": "Jedzenie",
        "description": "occaecat non nulla",
        "date": "2015-02-02",
        "isExpense": true
      },
      {
        "id": 31,
        "amount": 5.91,
        "category": "Jedzenie",
        "description": "ad fugiat ex",
        "date": "2014-01-04",
        "isExpense": true
      },
      {
        "id": 32,
        "amount": 11.44,
        "category": "Jedzenie",
        "description": "laboris aliquip ipsum",
        "date": "2014-07-14",
        "isExpense": true
      },
      {
        "id": 33,
        "amount": 11.36,
        "category": "Ubrania",
        "description": "nostrud commodo reprehenderit",
        "date": "2014-09-17",
        "isExpense": true
      },
      {
        "id": 34,
        "amount": 4.41,
        "category": "Prezenty dla znajomych",
        "description": "dolore occaecat do",
        "date": "2014-01-29",
        "isExpense": true
      },
      {
        "id": 35,
        "amount": 1.13,
        "category": "Komunikacja miejska",
        "description": "aliqua et est",
        "date": "2015-05-25",
        "isExpense": true
      },
      {
        "id": 36,
        "amount": 3.29,
        "category": "Komunikacja miejska",
        "description": "cupidatat eu dolor",
        "date": "2015-02-20",
        "isExpense": true
      },
      {
        "id": 37,
        "amount": 12.55,
        "category": "Jedzenie",
        "description": "excepteur fugiat fugiat",
        "date": "2014-12-11",
        "isExpense": true
      },
      {
        "id": 38,
        "amount": 2.21,
        "category": "Jedzenie",
        "description": "enim ipsum aliquip",
        "date": "2014-08-13",
        "isExpense": true
      },
      {
        "id": 39,
        "amount": 6.95,
        "category": "Jedzenie",
        "description": "pariatur nisi sit",
        "date": "2014-10-23",
        "isExpense": true
      },
      {
        "id": 40,
        "amount": 1.61,
        "category": "Prezenty dla znajomych",
        "description": "commodo minim commodo",
        "date": "2015-09-16",
        "isExpense": true
      },
      {
        "id": 41,
        "amount": 9.1,
        "category": "Komunikacja miejska",
        "description": "ad do sunt",
        "date": "2014-10-17",
        "isExpense": true
      },
      {
        "id": 42,
        "amount": 4.77,
        "category": "Prezenty dla znajomych",
        "description": "ipsum commodo fugiat",
        "date": "2014-10-25",
        "isExpense": true
      },
      {
        "id": 43,
        "amount": 10.68,
        "category": "Ubrania",
        "description": "qui enim tempor",
        "date": "2014-05-11",
        "isExpense": true
      },
      {
        "id": 44,
        "amount": 14.23,
        "category": "Komunikacja miejska",
        "description": "esse elit sit",
        "date": "2015-06-25",
        "isExpense": true
      },
      {
        "id": 45,
        "amount": 2.58,
        "category": "Prezenty dla znajomych",
        "description": "nostrud laboris ut",
        "date": "2014-06-22",
        "isExpense": true
      },
      {
        "id": 46,
        "amount": 7.82,
        "category": "Komunikacja miejska",
        "description": "qui consequat laborum",
        "date": "2014-01-11",
        "isExpense": true
      },
      {
        "id": 47,
        "amount": 9.2,
        "category": "Ubrania",
        "description": "dolor voluptate est",
        "date": "2015-07-19",
        "isExpense": true
      },
      {
        "id": 48,
        "amount": 4.2,
        "category": "Prezenty dla znajomych",
        "description": "cillum occaecat Lorem",
        "date": "2014-05-05",
        "isExpense": true
      },
      {
        "id": 49,
        "amount": 10.3,
        "category": "Ubrania",
        "description": "id dolore anim",
        "date": "2015-06-30",
        "isExpense": true
      },
      {
        "id": 50,
        "amount": 1.27,
        "category": "Komunikacja miejska",
        "description": "fugiat do eu",
        "date": "2015-01-03",
        "isExpense": true
      },
      {
        "id": 51,
        "amount": 11.57,
        "category": "Ubrania",
        "description": "elit sit aliqua",
        "date": "2014-12-01",
        "isExpense": true
      },
      {
        "id": 52,
        "amount": 8.39,
        "category": "Ubrania",
        "description": "minim sit aliqua",
        "date": "2015-04-23",
        "isExpense": true
      },
      {
        "id": 53,
        "amount": 4.62,
        "category": "Ubrania",
        "description": "duis non ex",
        "date": "2014-09-03",
        "isExpense": true
      },
      {
        "id": 54,
        "amount": 10.23,
        "category": "Ubrania",
        "description": "nisi eiusmod eiusmod",
        "date": "2014-06-24",
        "isExpense": true
      },
      {
        "id": 55,
        "amount": 1.74,
        "category": "Jedzenie",
        "description": "est sint est",
        "date": "2015-07-19",
        "isExpense": true
      },
      {
        "id": 56,
        "amount": 10.16,
        "category": "Jedzenie",
        "description": "ut ipsum aute",
        "date": "2015-05-04",
        "isExpense": true
      },
      {
        "id": 57,
        "amount": 5.49,
        "category": "Ubrania",
        "description": "voluptate pariatur dolor",
        "date": "2015-07-05",
        "isExpense": true
      },
      {
        "id": 58,
        "amount": 1.51,
        "category": "Ubrania",
        "description": "minim exercitation laboris",
        "date": "2015-04-19",
        "isExpense": true
      },
      {
        "id": 59,
        "amount": 6.97,
        "category": "Jedzenie",
        "description": "ut qui do",
        "date": "2015-01-02",
        "isExpense": true
      },
      {
        "id": 60,
        "amount": 10.33,
        "category": "Prezenty dla znajomych",
        "description": "voluptate eu est",
        "date": "2015-05-31",
        "isExpense": true
      },
      {
        "id": 61,
        "amount": 4.47,
        "category": "Prezenty dla znajomych",
        "description": "dolor reprehenderit sunt",
        "date": "2015-03-28",
        "isExpense": true
      },
      {
        "id": 62,
        "amount": 10.37,
        "category": "Ubrania",
        "description": "nostrud ipsum laborum",
        "date": "2014-09-17",
        "isExpense": true
      },
      {
        "id": 63,
        "amount": 15,
        "category": "Komunikacja miejska",
        "description": "elit laboris do",
        "date": "2015-02-24",
        "isExpense": true
      },
      {
        "id": 64,
        "amount": 1.87,
        "category": "Jedzenie",
        "description": "minim est eiusmod",
        "date": "2014-01-03",
        "isExpense": true
      },
      {
        "id": 65,
        "amount": 4.26,
        "category": "Prezenty dla znajomych",
        "description": "officia culpa dolore",
        "date": "2014-01-03",
        "isExpense": true
      },
      {
        "id": 66,
        "amount": 5.84,
        "category": "Ubrania",
        "description": "pariatur sit et",
        "date": "2014-11-07",
        "isExpense": true
      },
      {
        "id": 67,
        "amount": 4.71,
        "category": "Jedzenie",
        "description": "tempor fugiat exercitation",
        "date": "2015-04-11",
        "isExpense": true
      },
      {
        "id": 68,
        "amount": 5.26,
        "category": "Ubrania",
        "description": "consectetur minim ad",
        "date": "2015-09-13",
        "isExpense": true
      },
      {
        "id": 69,
        "amount": 13.08,
        "category": "Jedzenie",
        "description": "enim consequat dolor",
        "date": "2015-08-04",
        "isExpense": true
      },
      {
        "id": 70,
        "amount": 10.31,
        "category": "Komunikacja miejska",
        "description": "aliqua nostrud elit",
        "date": "2014-04-07",
        "isExpense": true
      },
      {
        "id": 71,
        "amount": 8.45,
        "category": "Komunikacja miejska",
        "description": "ipsum ad irure",
        "date": "2014-03-08",
        "isExpense": true
      },
      {
        "id": 72,
        "amount": 3.09,
        "category": "Prezenty dla znajomych",
        "description": "excepteur ex in",
        "date": "2014-10-11",
        "isExpense": true
      },
      {
        "id": 73,
        "amount": 4.67,
        "category": "Ubrania",
        "description": "laborum nostrud officia",
        "date": "2015-05-14",
        "isExpense": true
      },
      {
        "id": 74,
        "amount": 12.64,
        "category": "Komunikacja miejska",
        "description": "pariatur dolore officia",
        "date": "2015-05-29",
        "isExpense": true
      },
      {
        "id": 75,
        "amount": 1.41,
        "category": "Komunikacja miejska",
        "description": "dolore deserunt et",
        "date": "2014-07-02",
        "isExpense": true
      },
      {
        "id": 76,
        "amount": 7.93,
        "category": "Ubrania",
        "description": "mollit ut ex",
        "date": "2015-09-14",
        "isExpense": true
      },
      {
        "id": 77,
        "amount": 12.51,
        "category": "Prezenty dla znajomych",
        "description": "voluptate non dolor",
        "date": "2014-09-12",
        "isExpense": true
      },
      {
        "id": 78,
        "amount": 1.6,
        "category": "Jedzenie",
        "description": "ad in veniam",
        "date": "2014-09-10",
        "isExpense": true
      },
      {
        "id": 79,
        "amount": 5.51,
        "category": "Ubrania",
        "description": "aliqua sit aliqua",
        "date": "2014-05-27",
        "isExpense": true
      },
      {
        "id": 80,
        "amount": 10.87,
        "category": "Prezenty dla znajomych",
        "description": "qui exercitation in",
        "date": "2015-01-03",
        "isExpense": true
      },
      {
        "id": 81,
        "amount": 11.93,
        "category": "Prezenty dla znajomych",
        "description": "proident occaecat ut",
        "date": "2015-03-23",
        "isExpense": true
      },
      {
        "id": 82,
        "amount": 1.93,
        "category": "Komunikacja miejska",
        "description": "laboris velit officia",
        "date": "2014-04-19",
        "isExpense": true
      },
      {
        "id": 83,
        "amount": 14.16,
        "category": "Komunikacja miejska",
        "description": "deserunt enim labore",
        "date": "2015-05-13",
        "isExpense": true
      },
      {
        "id": 84,
        "amount": 9.95,
        "category": "Komunikacja miejska",
        "description": "exercitation dolore in",
        "date": "2014-03-19",
        "isExpense": true
      },
      {
        "id": 85,
        "amount": 3.61,
        "category": "Komunikacja miejska",
        "description": "adipisicing commodo aute",
        "date": "2014-03-03",
        "isExpense": true
      },
      {
        "id": 86,
        "amount": 12.58,
        "category": "Prezenty dla znajomych",
        "description": "proident eu laboris",
        "date": "2014-07-17",
        "isExpense": true
      },
      {
        "id": 87,
        "amount": 6.23,
        "category": "Komunikacja miejska",
        "description": "veniam anim ullamco",
        "date": "2014-09-06",
        "isExpense": true
      },
      {
        "id": 88,
        "amount": 12.68,
        "category": "Prezenty dla znajomych",
        "description": "ex tempor exercitation",
        "date": "2015-01-19",
        "isExpense": true
      },
      {
        "id": 89,
        "amount": 1.38,
        "category": "Komunikacja miejska",
        "description": "exercitation adipisicing aliquip",
        "date": "2015-04-05",
        "isExpense": true
      },
      {
        "id": 90,
        "amount": 2.59,
        "category": "Ubrania",
        "description": "cupidatat ut sit",
        "date": "2014-12-03",
        "isExpense": true
      },
      {
        "id": 91,
        "amount": 12.71,
        "category": "Ubrania",
        "description": "sint non adipisicing",
        "date": "2014-01-10",
        "isExpense": true
      },
      {
        "id": 92,
        "amount": 8.97,
        "category": "Komunikacja miejska",
        "description": "fugiat duis aliqua",
        "date": "2014-01-20",
        "isExpense": true
      },
      {
        "id": 93,
        "amount": 8.55,
        "category": "Komunikacja miejska",
        "description": "ex dolore nulla",
        "date": "2015-03-29",
        "isExpense": true
      },
      {
        "id": 94,
        "amount": 11.43,
        "category": "Ubrania",
        "description": "velit ullamco cupidatat",
        "date": "2014-05-30",
        "isExpense": true
      },
      {
        "id": 95,
        "amount": 7.24,
        "category": "Ubrania",
        "description": "ea exercitation non",
        "date": "2015-05-08",
        "isExpense": true
      },
      {
        "id": 96,
        "amount": 11.74,
        "category": "Prezenty dla znajomych",
        "description": "ipsum ut sunt",
        "date": "2014-01-31",
        "isExpense": true
      },
      {
        "id": 97,
        "amount": 14.81,
        "category": "Jedzenie",
        "description": "minim deserunt aute",
        "date": "2014-03-09",
        "isExpense": true
      },
      {
        "id": 98,
        "amount": 11.7,
        "category": "Jedzenie",
        "description": "laborum sit eiusmod",
        "date": "2014-02-23",
        "isExpense": true
      },
      {
        "id": 99,
        "amount": 11.24,
        "category": "Komunikacja miejska",
        "description": "labore ex aute",
        "date": "2015-07-27",
        "isExpense": true
      },
      {
        "id": 100,
        "amount": 14.39,
        "category": "Ubrania",
        "description": "adipisicing dolore ad",
        "date": "2015-08-22",
        "isExpense": true
      },
      {
        "id": 101,
        "amount": 7.03,
        "category": "Ubrania",
        "description": "occaecat Lorem nisi",
        "date": "2015-08-04",
        "isExpense": true
      },
      {
        "id": 102,
        "amount": 8.35,
        "category": "Jedzenie",
        "description": "est culpa aliquip",
        "date": "2014-01-09",
        "isExpense": true
      },
      {
        "id": 103,
        "amount": 9.55,
        "category": "Jedzenie",
        "description": "officia ipsum pariatur",
        "date": "2015-04-15",
        "isExpense": true
      },
      {
        "id": 104,
        "amount": 11.46,
        "category": "Komunikacja miejska",
        "description": "cillum ut enim",
        "date": "2014-12-16",
        "isExpense": true
      },
      {
        "id": 105,
        "amount": 4.86,
        "category": "Komunikacja miejska",
        "description": "reprehenderit elit ad",
        "date": "2015-05-19",
        "isExpense": true
      },
      {
        "id": 106,
        "amount": 11.47,
        "category": "Prezenty dla znajomych",
        "description": "reprehenderit duis veniam",
        "date": "2014-01-03",
        "isExpense": true
      },
      {
        "id": 107,
        "amount": 4.53,
        "category": "Prezenty dla znajomych",
        "description": "labore laborum laborum",
        "date": "2014-03-29",
        "isExpense": true
      },
      {
        "id": 108,
        "amount": 8.71,
        "category": "Komunikacja miejska",
        "description": "elit aliquip ipsum",
        "date": "2015-09-07",
        "isExpense": true
      },
      {
        "id": 109,
        "amount": 9.39,
        "category": "Jedzenie",
        "description": "in ipsum Lorem",
        "date": "2015-07-16",
        "isExpense": true
      },
      {
        "id": 110,
        "amount": 13.41,
        "category": "Ubrania",
        "description": "excepteur minim voluptate",
        "date": "2014-04-08",
        "isExpense": true
      },
      {
        "id": 111,
        "amount": 7.43,
        "category": "Ubrania",
        "description": "velit occaecat consectetur",
        "date": "2014-09-18",
        "isExpense": true
      },
      {
        "id": 112,
        "amount": 7.95,
        "category": "Ubrania",
        "description": "laboris reprehenderit duis",
        "date": "2014-10-28",
        "isExpense": true
      },
      {
        "id": 113,
        "amount": 8.95,
        "category": "Jedzenie",
        "description": "consequat incididunt commodo",
        "date": "2014-03-05",
        "isExpense": true
      },
      {
        "id": 114,
        "amount": 6.55,
        "category": "Jedzenie",
        "description": "voluptate magna est",
        "date": "2015-07-18",
        "isExpense": true
      },
      {
        "id": 115,
        "amount": 7.83,
        "category": "Komunikacja miejska",
        "description": "deserunt voluptate cillum",
        "date": "2015-02-15",
        "isExpense": true
      },
      {
        "id": 116,
        "amount": 11.62,
        "category": "Jedzenie",
        "description": "laboris non minim",
        "date": "2015-05-13",
        "isExpense": true
      },
      {
        "id": 117,
        "amount": 7.32,
        "category": "Jedzenie",
        "description": "dolor in incididunt",
        "date": "2015-06-18",
        "isExpense": true
      },
      {
        "id": 118,
        "amount": 11.46,
        "category": "Ubrania",
        "description": "laboris esse ut",
        "date": "2014-08-20",
        "isExpense": true
      },
      {
        "id": 119,
        "amount": 7.35,
        "category": "Ubrania",
        "description": "occaecat nostrud anim",
        "date": "2014-03-04",
        "isExpense": true
      },
      {
        "id": 120,
        "amount": 11.84,
        "category": "Ubrania",
        "description": "deserunt aliquip mollit",
        "date": "2015-02-11",
        "isExpense": true
      },
      {
        "id": 121,
        "amount": 1.22,
        "category": "Prezenty dla znajomych",
        "description": "consectetur nulla ea",
        "date": "2015-07-23",
        "isExpense": true
      },
      {
        "id": 122,
        "amount": 4.65,
        "category": "Prezenty dla znajomych",
        "description": "cupidatat non eiusmod",
        "date": "2014-07-11",
        "isExpense": true
      },
      {
        "id": 123,
        "amount": 11.07,
        "category": "Ubrania",
        "description": "laboris laborum non",
        "date": "2015-06-03",
        "isExpense": true
      },
      {
        "id": 124,
        "amount": 1.62,
        "category": "Prezenty dla znajomych",
        "description": "enim enim laboris",
        "date": "2014-09-02",
        "isExpense": true
      },
      {
        "id": 125,
        "amount": 5.52,
        "category": "Prezenty dla znajomych",
        "description": "laborum aliqua incididunt",
        "date": "2015-09-15",
        "isExpense": true
      },
      {
        "id": 126,
        "amount": 2.83,
        "category": "Jedzenie",
        "description": "tempor enim ipsum",
        "date": "2015-08-22",
        "isExpense": true
      },
      {
        "id": 127,
        "amount": 13.92,
        "category": "Ubrania",
        "description": "occaecat ut sunt",
        "date": "2014-01-21",
        "isExpense": true
      },
      {
        "id": 128,
        "amount": 8.1,
        "category": "Ubrania",
        "description": "do aute sit",
        "date": "2015-07-25",
        "isExpense": true
      },
      {
        "id": 129,
        "amount": 3.99,
        "category": "Ubrania",
        "description": "aliquip mollit velit",
        "date": "2014-04-27",
        "isExpense": true
      },
      {
        "id": 130,
        "amount": 3.67,
        "category": "Komunikacja miejska",
        "description": "occaecat magna fugiat",
        "date": "2015-06-22",
        "isExpense": true
      },
      {
        "id": 131,
        "amount": 8.7,
        "category": "Komunikacja miejska",
        "description": "Lorem id pariatur",
        "date": "2015-01-27",
        "isExpense": true
      },
      {
        "id": 132,
        "amount": 10.41,
        "category": "Prezenty dla znajomych",
        "description": "elit occaecat voluptate",
        "date": "2014-07-04",
        "isExpense": true
      },
      {
        "id": 133,
        "amount": 1.04,
        "category": "Komunikacja miejska",
        "description": "aliqua nostrud et",
        "date": "2014-08-16",
        "isExpense": true
      },
      {
        "id": 134,
        "amount": 5.06,
        "category": "Komunikacja miejska",
        "description": "esse elit magna",
        "date": "2014-12-15",
        "isExpense": true
      },
      {
        "id": 135,
        "amount": 3.76,
        "category": "Prezenty dla znajomych",
        "description": "consequat in laboris",
        "date": "2015-06-30",
        "isExpense": true
      },
      {
        "id": 136,
        "amount": 1.09,
        "category": "Jedzenie",
        "description": "elit sit aute",
        "date": "2015-07-19",
        "isExpense": true
      },
      {
        "id": 137,
        "amount": 3.29,
        "category": "Komunikacja miejska",
        "description": "pariatur proident consequat",
        "date": "2014-03-30",
        "isExpense": true
      },
      {
        "id": 138,
        "amount": 6.09,
        "category": "Prezenty dla znajomych",
        "description": "cupidatat irure magna",
        "date": "2014-11-17",
        "isExpense": true
      },
      {
        "id": 139,
        "amount": 14.06,
        "category": "Jedzenie",
        "description": "irure dolor et",
        "date": "2014-08-08",
        "isExpense": true
      },
      {
        "id": 140,
        "amount": 4.78,
        "category": "Prezenty dla znajomych",
        "description": "labore ut magna",
        "date": "2015-04-24",
        "isExpense": true
      },
      {
        "id": 141,
        "amount": 1.37,
        "category": "Komunikacja miejska",
        "description": "labore occaecat laboris",
        "date": "2014-04-01",
        "isExpense": true
      },
      {
        "id": 142,
        "amount": 8.34,
        "category": "Ubrania",
        "description": "proident qui consectetur",
        "date": "2015-05-17",
        "isExpense": true
      },
      {
        "id": 143,
        "amount": 6.62,
        "category": "Jedzenie",
        "description": "Lorem elit occaecat",
        "date": "2014-11-15",
        "isExpense": true
      },
      {
        "id": 144,
        "amount": 11.75,
        "category": "Prezenty dla znajomych",
        "description": "dolor nisi consequat",
        "date": "2014-12-11",
        "isExpense": true
      },
      {
        "id": 145,
        "amount": 11.8,
        "category": "Komunikacja miejska",
        "description": "eu ex excepteur",
        "date": "2014-11-09",
        "isExpense": true
      },
      {
        "id": 146,
        "amount": 11.94,
        "category": "Jedzenie",
        "description": "enim nisi cillum",
        "date": "2014-09-25",
        "isExpense": true
      },
      {
        "id": 147,
        "amount": 9.22,
        "category": "Prezenty dla znajomych",
        "description": "anim occaecat in",
        "date": "2014-09-21",
        "isExpense": true
      },
      {
        "id": 148,
        "amount": 11.36,
        "category": "Komunikacja miejska",
        "description": "aute mollit aliqua",
        "date": "2014-10-22",
        "isExpense": true
      },
      {
        "id": 149,
        "amount": 4.38,
        "category": "Prezenty dla znajomych",
        "description": "consectetur pariatur amet",
        "date": "2015-06-29",
        "isExpense": true
      }
    ];
    return result;
  }


})();
