angular.module("store.subProductCategory").directive("subProductCategory", function () {

    "use strict";
    return {
        restrict: "E",
        replace: true,
        controller: "subProductCategoryController",
        controllerAs: "subProductCategory",
        templateUrl: "/modules/dashboard/subProductCategory/subProductCategory.html"
    };

});
