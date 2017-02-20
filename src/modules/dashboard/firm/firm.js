angular.module("store.firm").directive("firm", function () {

    "use strict";
    return {
        restrict: "E",
        replace: true,
        controller: "firmController",
        controllerAs: "firm",
        templateUrl: "/modules/dashboard/firm/firm.html"
    };

});
