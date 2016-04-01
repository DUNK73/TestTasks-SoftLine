(function () {
    'use strict';

    var app = angular.module("SLTest.App",
    [
        "SLTest.Controllers",
        "SLTest.Services",
        "SLTest.Directives",

        "ngMask"
    ]);

    angular.module("SLTest.Controllers", []);
    angular.module("SLTest.Services", []);
    angular.module("SLTest.Directives", []);

 //   app.config(function ($stateProvider, $urlRouterProvider) {
 //
 //       $urlRouterProvider.otherwise("/screen1");
 //
 //       $stateProvider
 //           .state('screen1', {
 //               url: "/screen1",
 //               templateUrl: "tpl-screen1"
 //           });
 //       $stateProvider
 //           .state('screen2', {
 //               url: "/screen2",
 //               templateUrl: "tpl-screen2"
 //           });
 //   });

})();