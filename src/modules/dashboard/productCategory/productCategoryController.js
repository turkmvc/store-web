angular.module("store.productCategory").controller("productCategoryController",
    ["productCategoryService",
        function (productCategoryService) {
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

              var config = {
                  "onSuccess": self.successCRUDProductCategory,
                  "onError": self.errorProductCategory
              };
              productCategoryService.updateProductCategory(config, data);
            }

            self.deleteProductCategory = function () {
              var data = {
                id: self.productCategoryId,
                name: self.productCategoryName
              };

              var config = {
                  "onSuccess": self.successCRUDProductCategory,
                  "onError": self.errorProductCategory
              };
              productCategoryService.deleteProductCategory(config, data);
            }

            self.saveProductCategory = function () {
              var data = {
                name: self.productCategoryName
              };

              var config = {
                  "onSuccess": self.successCRUDProductCategory,
                  "onError": self.errorProductCategory
              };
              productCategoryService.saveProductCategory(config, data);
            }

            self.getProductCategoryList = function () {
                var config = {
                    "onSuccess": self.successGetProductCategory,
                    "onError": self.errorProductCategory
                };
                productCategoryService.getProductCategoryList(config, data);

            };

            self.getProductCategoryList();
        }
    ]);
