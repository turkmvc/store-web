angular.module("store.product").directive("product", function () {

    "use strict";
    return {
        restrict: "E",
        replace: true,
        controller: "productController",
        controllerAs: "product",
        templateUrl: "/modules/dashboard/product/product.html"
    };

});
