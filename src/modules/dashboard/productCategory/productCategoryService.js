angular.module("store.productCategory").service("productCategoryService",
    ["productCategoryApi",
        function (productCategoryApi) {

            var self = this;

            self.updateProductCategory = function (config, data) {
              var data = {
                id: self.productCategoryId,
                name: self.productCategoryName
              };
              var request = {
                  name : "store",
                  method: "POST",
                  url: "/secure/productCategory",//TODO collect urls to constants
                  data: data
              };

              productCategoryApi.makeRequest(request, config);
            }

            self.deleteProductCategory = function (config, data) {
              var request = {
                  name : "store",
                  method: "DELETE",
                  url: "/secure/productCategory",//TODO collect urls to constants
                  data: data
              };
              productCategoryApi.makeRequest(request, config);
            }

            self.saveProductCategory = function (config, data) {
              var request = {
                  name : "store",
                  method: "PUT",
                  url: "/secure/productCategory",//TODO collect urls to constants
                  data: data
              };
              productCategoryApi.makeRequest(request, config);
            }

            self.getProductCategoryList = function (config) {
                var request = {
                    name : "store",
                    method: "GET",
                    url: "/secure/productCategory",//TODO collect urls to constants
                };
                productCategoryApi.makeRequest(request, config);
            };
          }

    ]);
