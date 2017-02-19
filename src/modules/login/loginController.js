angular.module("store.login")
    .controller("loginController",
        ["$http", "$scope",
            function ($http, $scope) {

              var self = this;

                self.loginPageConfig = {
                    mainTitle: "STORE APP"
                };

                self.login = function () {

                };
            }]);
