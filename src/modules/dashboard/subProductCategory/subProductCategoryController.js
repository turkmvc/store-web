angular.module("store.subProductCategory").controller("subProductCategoryController",
    ["productCategoryService", "subProductCategoryService",
        function (productCategoryService, subProductCategoryService) {
            "use strict";
            var self = this;
            self.productCategoryList = [];
            self.subProductCategoryList = [];
            self.subProductCategoryId = "";
            self.subProductCategoryName = "";

            self.successGetProductCategory = function (data) {
              self.subProductCategoryList = data;
            }

            self.successCRUDSubProductCategory = function (data) {
              self.getSubProductCategoryList();
            }

            self.errorSubProductCategory = function (data) {

            }

            self.setSubProductCategory = function (subProductCategory) {
              self.subProductCategoryId = subProductCategory.id;
              self.subProductCategoryName = subProductCategory.name;
            }

            self.updateSubProductCategory = function () {
              var data = {
                id: self.subProductCategoryId,
                name: self.subProductCategoryName,
                description: self.subProductCategoryDescription
              };

              var config = {
                  "onSuccess": self.successCRUDSubProductCategory,
                  "onError": self.errorSubProductCategory
              };
              subProductCategoryService.updateSubProductCategory(config, data);
            }

            self.deleteSubProductCategory = function () {
              var data = {
                id: self.subProductCategoryId,
                name: self.subProductCategoryName
              };

              var config = {
                  "onSuccess": self.successCRUDSubProductCategory,
                  "onError": self.errorSubProductCategory
              };
              subProductCategoryService.deleteSubProductCategory(config, data);
            }

            self.saveSubProductCategory = function () {
              var data = {
                name: self.subProductCategoryName,
                description: self.subProductCategoryDescription
              };

              var config = {
                  "onSuccess": self.successCRUDSubProductCategory,
                  "onError": self.errorSubProductCategory
              };
              subProductCategoryService.saveSubProductCategory(config, data);
            }

            self.getSubProductCategoryList = function () {

                var config = {
                    "onSuccess": self.successGetSubProductCategory,
                    "onError": self.errorSubProductCategory
                };
                subProductCategoryService.getSubProductCategoryList(config);

            };

            self.successGetProductCategory = function (data) {
              self.productCategoryList = data;
            }

            self.getProductCategoryList = function () {
                var config = {
                    "onSuccess": self.successGetProductCategory,
                    "onError": self.errorSubProductCategory
                };
                productCategoryService.getProductCategoryList(config);

            };

            self.init = function () {
              self.getProductCategoryList();
              self.getSubProductCategoryList();
            }

          self.init();
        }
    ]);
