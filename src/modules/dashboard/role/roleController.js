angular.module("store.role").controller("roleController",
    ["roleService",
        function (roleService) {
            "use strict";
            var self = this;
            self.roleList = [];
            self.roleId = "";
            self.roleName = "";
            self.roleDescription = "";
            self.roleAbbreviation = "";

            self.successGetRole = function (data) {
              self.roleList = data;
            }

            self.successCRUDRole = function (data) {
              self.getRoleList();
            }

            self.errorRole = function (data) {

            }

            self.setRole = function (role) {
              self.roleId = role.id;
              self.roleName = role.name;
              self.roleDescription = role.description;
              self.roleAbbreviation = role.abbreviation;
            }

            self.updateRole = function () {
              var data = {
                id: self.roleId,
                name: self.roleName,
                description: self.roleDescription,
                abbreviation: self.roleAbbreviation
              };

              var config = {
                  "onSuccess": self.successCRUDRole,
                  "onError": self.errorRole
              };
              roleService.updateRole(config, data);
            }

            self.deleteRole = function () {
              var data = {
                id: self.roleId,
                name: self.roleName,
                description: self.roleDescription,
                abbreviation: self.roleAbbreviation
              };
              var config = {
                  "onSuccess": self.successCRUDRole,
                  "onError": self.errorRole
              };
              roleService.deleteRole(config, data);
            }

            self.saveRole = function () {
              var data = {
                name: self.roleName,
                description: self.roleDescription,
                abbreviation: self.roleAbbreviation
              };

              var config = {
                  "onSuccess": self.successCRUDRole,
                  "onError": self.errorRole
              };
              roleService.saveRole(config, data);
            }

            self.getRoleList = function () {

                var config = {
                    "onSuccess": self.successGetRole,
                    "onError": self.errorRole
                };
                roleService.getRoleList(config);

            };

            self.getRoleList();

        }
    ]);
