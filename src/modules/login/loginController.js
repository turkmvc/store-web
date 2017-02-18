/*
 * Copyright 2003-2016 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 *
 */

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
                $scope.loginFormConfig = {
                    formHeaderTitle : "Sign In to Your Account",
                    formUsername : {
                        label : "Username",
                        input : "Username",
                        tooltip : "Invalid Username"
                    },
                    formPassword : {
                        label : "Password",
                        input : "Password",
                        tooltip : "Wrong Password"
                    },
                    rememberMe : "Remember Me",
                    submit : "Login",
                    forgotPassword : "Forgot Password?"
                };
            }]);
