angular.module("store.productCategory").controller("productCategoryController",
    ["storeApi",
        function (storeApi) {
            "use strict";
            var self = this;
            self.productCategoryList = [];
            self.productCategoryId = "";
            self.productCategoryName = "";

            self.successGetProductCategory = function (data) {
              self.productCategoryList = data;
            }

            self.successCRUDProductCategory = function (data) {
              self.getProductCategoryList();
            }

            self.errorProductCategory = function (data) {

            }

            self.setProductCategory = function (productCategory) {
              self.productCategoryId = productCategory.id;
              self.productCategoryName = productCategory.name;
            }

            self.updateProductCategory = function () {
              var data = {
                id: self.productCategoryId,
                name: self.productCategoryName,
                description: self.productCategoryDescription
              };
              var request = {
                  name : "store",
                  method: "UPDATE",
                  url: "/secure/productCategory",//TODO collect urls to constants
                  data: data
              };

              var config = {
                  "onSuccess": self.successCRUDProductCategory,
                  "onError": self.errorProductCategory
              };
              storeApi.makeRequest(request, config);
            }

            self.deleteProductCategory = function () {
              var data = {
                id: self.productCategoryId,
                name: self.productCategoryName
              };
              var request = {
                  name : "store",
                  method: "DELETE",
                  url: "/secure/productCategory",//TODO collect urls to constants
                  data: data
              };

              var config = {
                  "onSuccess": self.successCRUDProductCategory,
                  "onError": self.errorProductCategory
              };
              storeApi.makeRequest(request, config);
            }

            self.saveProductCategory = function () {
              var data = {
                name: self.productCategoryName
              };
              var request = {
                  name : "store",
                  method: "PUT",
                  url: "/secure/productCategory",//TODO collect urls to constants
                  data: data
              };

              var config = {
                  "onSuccess": self.successCRUDProductCategory,
                  "onError": self.errorProductCategory
              };
              storeApi.makeRequest(request, config);
            }

            self.getProductCategoryList = function () {
                var request = {
                    name : "store",
                    method: "GET",
                    url: "/secure/productCategory",//TODO collect urls to constants
                };

                var config = {
                    "onSuccess": self.successGetProductCategory,
                    "onError": self.errorProductCategory
                };
                storeApi.makeRequest(request, config);

            };

            self.getProductCategoryList();
        }
    ]);
