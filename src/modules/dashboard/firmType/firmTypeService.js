angular.module("store.firmType").service("firmTypeService",
    ["storeApi",
        function (storeApi) {

            var self = this;

            self.updateFirmType = function (config, data) {
              var request = {
                  name : "store",
                  method: "POST",
                  url: "/secure/firmType",//TODO collect urls to constants
                  data: data
              };

              storeApi.makeRequest(request, config);
            }

            self.deleteFirmType = function (config, data) {
              var request = {
                  name : "store",
                  method: "DELETE",
                  url: "/secure/firmType",//TODO collect urls to constants
                  data: data
              };
              storeApi.makeRequest(request, config);
            }

            self.saveFirmType = function (config, data) {
              var request = {
                  name : "store",
                  method: "PUT",
                  url: "/secure/firmType",//TODO collect urls to constants
                  data: data
              };
              storeApi.makeRequest(request, config);
            }

            self.getFirmTypeList = function (config) {
                var request = {
                    name : "store",
                    method: "GET",
                    url: "/secure/firmType",//TODO collect urls to constants
                };
                storeApi.makeRequest(request, config);
            };
          }

    ]);
