angular.module("store.firm").service("firmService",
    ["storeApi",
        function (storeApi) {

            var self = this;

            self.updateFirm = function (config, data) {
              var data = {
                id: self.firmId,
                name: self.firmName
              };
              var request = {
                  name : "store",
                  method: "POST",
                  url: "/secure/firm",//TODO collect urls to constants
                  data: data
              };

              storeApi.makeRequest(request, config);
            }

            self.deleteFirm = function (config, data) {
              var request = {
                  name : "store",
                  method: "DELETE",
                  url: "/secure/firm",//TODO collect urls to constants
                  data: data
              };
              storeApi.makeRequest(request, config);
            }

            self.saveFirm = function (config, data) {
              var request = {
                  name : "store",
                  method: "PUT",
                  url: "/secure/firm",//TODO collect urls to constants
                  data: data
              };
              storeApi.makeRequest(request, config);
            }

            self.getFirmList = function (config) {
                var request = {
                    name : "store",
                    method: "GET",
                    url: "/secure/firm",//TODO collect urls to constants
                };
                storeApi.makeRequest(request, config);
            };
          }

    ]);
