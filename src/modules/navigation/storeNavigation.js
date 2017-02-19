angular.module("store.navigation").directive("storeNavigation", function () {

    "use strict";
    return {
        restrict: "E",
        replace: true,
        controller: "storeNavigationController",
        controllerAs: "storeNavigation",
        templateUrl: "/modules/navigation/store-navigation.html"
    };

});
