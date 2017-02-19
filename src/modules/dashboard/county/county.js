angular.module("store.county").directive("county", function () {

    "use strict";
    return {
        restrict: "E",
        replace: true,
        controller: "countyController",
        controllerAs: "county",
        templateUrl: "/modules/dashboard/county/county.html"
    };

});
