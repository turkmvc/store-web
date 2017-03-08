angular.module("store.role").service("roleService",
    ["storeApi",
        function (storeApi) {

            var self = this;

            self.updateRole = function (config, data) {
              var request = {
                  name : "store",
                  method: "POST",
                  url: "/secure/role",//TODO collect urls to constants
                  data: data
              };

              storeApi.makeRequest(request, config);
            }

            self.deleteRole = function (config, data) {
              var request = {
                  name : "store",
                  method: "DELETE",
                  url: "/secure/role",//TODO collect urls to constants
                  data: data
              };
              storeApi.makeRequest(request, config);
            }

            self.saveRole = function (config, data) {
              var request = {
                  name : "store",
                  method: "PUT",
                  url: "/secure/role",//TODO collect urls to constants
                  data: data
              };
              storeApi.makeRequest(request, config);
            }

            self.getRoleList = function (config) {
                var request = {
                    name : "store",
                    method: "GET",
                    url: "/secure/role",//TODO collect urls to constants
                };
                storeApi.makeRequest(request, config);
            };
          }

    ]);
