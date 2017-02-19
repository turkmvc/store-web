angular.module("store.store").directive("store", function () {

    "use strict";
    return {
        restrict: "E",
        replace: true,
        controller: "storeController",
        controllerAs: "store",
        templateUrl: "/modules/dashboard/store/store.html"
    };

});
