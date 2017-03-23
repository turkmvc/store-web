angular.module("store.user").service("userService",
    ["storeApi",
        function (storeApi) {

            var self = this;

            self.updateUser = function (config, data) {
              var request = {
                  name : "store",
                  method: "POST",
                  url: "/secure/user",//TODO collect urls to constants
                  data: data
              };

              storeApi.makeRequest(request, config);
            }

            self.deleteUser = function (config, data) {
              var request = {
                  name : "store",
                  method: "DELETE",
                  url: "/secure/user",//TODO collect urls to constants
                  data: data
              };
              storeApi.makeRequest(request, config);
            }

            self.saveUser = function (config, data) {
              var request = {
                  name : "store",
                  method: "PUT",
                  url: "/secure/user",//TODO collect urls to constants
                  data: data
              };
              storeApi.makeRequest(request, config);
            }

            self.getUserList = function (config) {
                var request = {
                    name : "store",
                    method: "GET",
                    url: "/secure/user",//TODO collect urls to constants
                };
                storeApi.makeRequest(request, config);
            };
          }

    ]);
