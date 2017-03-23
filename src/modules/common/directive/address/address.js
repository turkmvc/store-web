angular.module("store.common").directive("address", function () {

    "use strict";
    return {
        restrict: "E",
        replace: true,
        scope: {
            countyList: "="
        },
        controller: "addressController",
        controllerAs: "address",
        templateUrl: "/modules/common/directive/address/address.html"
    };

});
