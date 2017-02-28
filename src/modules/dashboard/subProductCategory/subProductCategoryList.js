angular.module("store.subProductCategory").service("subProductCategoryService",
    ["storeApi",
        function (storeApi) {

            var self = this;

            self.updateSubProductCategory = function (config, data) {
              var data = {
                id: self.subProductCategoryId,
                name: self.subProductCategoryName
              };
              var request = {
                  name : "store",
                  method: "UPDATE",
                  url: "/secure/subProductCategory",//TODO collect urls to constants
                  data: data
              };

              storeApi.makeRequest(request, config);
            }

            self.deleteSubProductCategory = function (config, data) {
              var request = {
                  name : "store",
                  method: "DELETE",
                  url: "/secure/subProductCategory",//TODO collect urls to constants
                  data: data
              };
              storeApi.makeRequest(request, config);
            }

            self.saveSubProductCategory = function (config, data) {
              var request = {
                  name : "store",
                  method: "PUT",
                  url: "/secure/subProductCategory",//TODO collect urls to constants
                  data: data
              };
              storeApi.makeRequest(request, config);
            }

            self.getSubProductCategoryList = function (config) {
                var request = {
                    name : "store",
                    method: "GET",
                    url: "/secure/subProductCategory",//TODO collect urls to constants
                };
                storeApi.makeRequest(request, config);
            };
          }

    ]);
