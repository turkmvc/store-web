angular.module("store.productCategory").controller("productCategoryController",
    ["productCategoryService",
        function (productCategoryService) {
            "use strict";
            var self = this;
            self.productCategoryList = [];
            self.productCategoryId = "";
            self.productCategoryName = "";
            debugger;
            self.selectedProductCategory = {
              id: -1,
              name: "Select product Category"
            }

            self.successGetProductCategory = function (data) {
              debugger;
              self.productCategoryList = data;
            }

            self.successCRUDProductCategory = function (data) {
              self.getProductCategoryList();
            }

            self.errorProductCategory = function (data) {

            }

            self.selectProductCategory = function (category) {
              self.selectedProductCategory = category;
            }

            self.setProductCategory = function (productCategory) {
              self.productCategoryId = productCategory.id;
              self.productCategoryName = productCategory.name;
              self.productCategoryDescription = productCategory.description;
              self.selectedProductCategory = productCategory.parentCategory;
            }

            self.updateProductCategory = function () {
              var data = {
                id: self.productCategoryId,
                name: self.productCategoryName,
                description: self.productCategoryDescription,
                parentCategory: self.selectedProductCategory
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
                name: self.productCategoryName,
                description: self.productCategoryDescription,
                parentCategory: self.selectedProductCategory
              };

              var config = {
                  "onSuccess": self.successCRUDProductCategory,
                  "onError": self.errorProductCategory
              };
              productCategoryService.deleteProductCategory(config, data);
            }

            self.saveProductCategory = function () {
              debugger;
              var data = {
                name: self.productCategoryName,
                description: self.productCategoryDescription,
                parentCategory: self.selectedProductCategory
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
                productCategoryService.getProductCategoryList(config);

            };

            self.getProductCategoryList();
        }
    ]);
