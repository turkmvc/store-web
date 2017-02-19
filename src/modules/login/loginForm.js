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
                  debugger;
                    if (!credentials || !validationUtil.nullCheck(credentials.username)) {
                        scope.showTooltip(".username-input");
                        return;
                    }

                    var request = {
                        name : "store",
                        method: "POST",
                        url: "http://localhost:8080/login/",//TODO collect urls to constants
                        data: credentials // pass in data as strings
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
