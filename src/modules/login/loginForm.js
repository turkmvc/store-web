angular.module("store.login").directive("loginForm",
    ["$state", "stateNames", "validationUtil", "storeApi",
        function ($state, stateNames, validationUtil, storeApi) {
        "use strict";

        return {
            restrict: "E",
            replace: true,
            scope: {
                loginFormConfig: "="
            },
            link: function (scope, element) {

                scope.successLogin = function (data) {
                  if (data.successful) {
                    $state.go(stateNames.DASHBOARD);
                  }
                  console.log(data);
                };

                scope.errorLogin = function (data) {
                  console.log(data);
                };

                scope.login = function (credentials) {
                    if (!credentials || !validationUtil.nullCheck(credentials.username)) {
                        scope.showTooltip(".username-input");
                        return;
                    }

                    var request = {
                        name : "store",
                        method: "POST",
                        url: "/login/",//TODO collect urls to constants
                        data: credentials,
                        headers: {
                          "Content-Type": "application/json"
                        }
                    };

                    var config = {
                        "onSuccess": scope.successLogin,
                        "onError": scope.errorLogin
                    };
                    storeApi.makeRequest(request, config);

                };

            },
            templateUrl: "/modules/login/loginForm.html"
        }
    }

    ]);
