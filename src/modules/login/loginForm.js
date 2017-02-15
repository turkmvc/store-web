/*
 * Copyright 2003-2016 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 *
 */

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

                scope.showTooltip = function (inputSelector) {
                    angular.element(inputSelector).tooltip("show");
                    element.find(".tooltip-inner").addClass("login-tooltip-inner");
                    element.find(".tooltip-arrow").addClass("login-tooltip-arrow");
                };

                scope.hideTooltip = function (inputSelector) {
                    $(inputSelector).tooltip("destroy");
                };

                scope.inputFocus = function () {
                    scope.hideTooltip(".username-input");
                    scope.hideTooltip(".password-input");
                };

                scope.successLogin = function (data) {
                    if (data.loggedIn) {
                        $state.go(stateNames.PROGRAM);
                    } else {
                        scope.showTooltip(".password-input");
                    }
                };

                scope.errorLogin = function (data) {
                    scope.showTooltip(".password-input");
                };

                scope.login = function (userform, credentials) {

                    if (!credentials || !validationUtil.nullCheck(credentials.username)) {
                        scope.showTooltip(".username-input");
                        return;
                    }

                    var request = {
                        name : "store",
                        method: "POST",
                        url: "http://localhost:8082/mea-rm-rest-0.0.0-SNAPSHOT/login/",//TODO collect urls to constants
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