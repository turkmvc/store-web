angular.module("store.dashboard")
    .controller("dashboardController",
        ["$rootScope",
            function ($rootScope) {
              $rootScope.$on("$viewContentLoaded", function () {
                $(".dropdown").dropdown();
              });
            }]);
