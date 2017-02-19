angular.module("store.routing").config(
    ["$urlRouterProvider",
        function ($urlRouterProvider) {
            "use strict";

            $urlRouterProvider.when("/", "/login");
            $urlRouterProvider.otherwise("/login");
        }]);
