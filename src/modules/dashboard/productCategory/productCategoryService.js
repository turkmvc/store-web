angular.module("store.productCategory").service("productCategoryService",
    ["storeApi",
        function (storeApi) {

            var self = this;

            self.updateProductCategory = function (config, data) {
              var request = {
                  name : "store",
                  method: "POST",
                  url: "/secure/productCategory",//TODO collect urls to constants
                  data: data
              };

              storeApi.makeRequest(request, config);
            }

            self.deleteProductCategory = function (config, data) {
              var request = {
                  name : "store",
                  method: "DELETE",
                  url: "/secure/productCategory",//TODO collect urls to constants
                  data: data
              };
              storeApi.makeRequest(request, config);
            }

            self.saveProductCategory = function (config, data) {
              var request = {
                  name : "store",
                  method: "PUT",
                  url: "/secure/productCategory",//TODO collect urls to constants
                  data: data
              };
              storeApi.makeRequest(request, config);
            }

            self.getProductCategoryList = function (config) {
                var request = {
                    name : "store",
                    method: "GET",
                    url: "/secure/productCategory",//TODO collect urls to constants
                };
                storeApi.makeRequest(request, config);
            };
          }

    ]);
