angular.module("store.firmType").directive("firmType", function () {

    "use strict";
    return {
        restrict: "E",
        replace: true,
        controller: "firmTypeController",
        controllerAs: "firmType",
        templateUrl: "/modules/dashboard/firmType/firmType.html"
    };

});
