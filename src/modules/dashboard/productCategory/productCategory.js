angular.module("store.productCategory").directive("productCategory", function () {

    "use strict";
    return {
        restrict: "E",
        replace: true,
        controller: "productCategoryController",
        controllerAs: "productCategory",
        templateUrl: "/modules/dashboard/productCategory/product-category.html"
    };

});
