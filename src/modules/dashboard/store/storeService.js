angular.module("store.store").service("storeService",
    ["storeApi",
        function (storeApi) {

            var self = this;

            self.updateStore = function (config, data) {
              var data = {
                id: self.storeId,
                name: self.storeName
              };
              var request = {
                  name : "store",
                  method: "UPDATE",
                  url: "/secure/store",//TODO collect urls to constants
                  data: data
              };

              storeApi.makeRequest(request, config);
            }

            self.deleteStore = function (config, data) {
              var request = {
                  name : "store",
                  method: "DELETE",
                  url: "/secure/store",//TODO collect urls to constants
                  data: data
              };
              storeApi.makeRequest(request, config);
            }

            self.saveStore = function (config, data) {
              var request = {
                  name : "store",
                  method: "PUT",
                  url: "/secure/store",//TODO collect urls to constants
                  data: data
              };
              storeApi.makeRequest(request, config);
            }

            self.getStoreList = function (config) {
                var request = {
                    name : "store",
                    method: "GET",
                    url: "/secure/store",//TODO collect urls to constants
                };
                storeApi.makeRequest(request, config);
            };
          }

    ]);
