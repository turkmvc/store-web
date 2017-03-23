angular.module("store.common").controller("addressController",
    ["$scope", "countyService",
        function ($scope, countyService) {
            "use strict";
            $(".dropdown").dropdown();
        }
    ]);
