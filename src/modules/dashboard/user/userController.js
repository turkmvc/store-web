angular.module("store.user").controller("userController",
    ["userService",
        function (userService) {
            "use strict";
            var self = this;
            self.userList = [];
            self.userId = "";
            self.userName = "";

            self.successGetUser = function (data) {
              self.userList = data;
            }

            self.successCRUDUser = function (data) {
              self.getUserList();
            }

            self.errorUser = function (data) {

            }

            self.setUser = function (user) {
              self.userId = user.id;
              self.userName = user.name;
            }

            self.updateUser = function () {
              var data = {
                id: self.userId,
                name: self.userName
              };

              var config = {
                  "onSuccess": self.successCRUDUser,
                  "onError": self.errorUser
              };
              userService.updateUser(config, data);
            }

            self.deleteUser = function () {
              var data = {
                id: self.userId,
                name: self.userName
              };

              var config = {
                  "onSuccess": self.successCRUDUser,
                  "onError": self.errorUser
              };
              userService.deleteUser(config, data);
            }

            self.saveUser = function () {
              var data = {
                name: self.userName
              };
              var config = {
                  "onSuccess": self.successCRUDUser,
                  "onError": self.errorUser
              };
              userService.saveUser(config, data);
            }

            self.getUserList = function () {
                var config = {
                    "onSuccess": self.successGetUser,
                    "onError": self.errorUser
                };
                userService.getUserList(config);
            };

            self.getUserList();

        }
    ]);
