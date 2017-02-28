angular.module("store.subProductCategory").controller("subProductCategoryController",
    [
        function () {
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
              var request = {
                  name : "store",
                  method: "UPDATE",
                  url: "/secure/subProductCategory",//TODO collect urls to constants
                  data: data
              };

              var config = {
                  "onSuccess": self.successCRUDSubProductCategory,
                  "onError": self.errorSubProductCategory
              };
              storeApi.makeRequest(request, config);
            }

            self.deleteSubProductCategory = function () {
              var data = {
                id: self.subProductCategoryId,
                name: self.subProductCategoryName
              };
              var request = {
                  name : "store",
                  method: "DELETE",
                  url: "/secure/subProductCategory",//TODO collect urls to constants
                  data: data
              };

              var config = {
                  "onSuccess": self.successCRUDSubProductCategory,
                  "onError": self.errorSubProductCategory
              };
              storeApi.makeRequest(request, config);
            }

            self.saveSubProductCategory = function () {
              var data = {
                name: self.subProductCategoryName,
                description: self.subProductCategoryDescription
              };
              var request = {
                  name : "store",
                  method: "PUT",
                  url: "/secure/subProductCategory",//TODO collect urls to constants
                  data: data
              };

              var config = {
                  "onSuccess": self.successCRUDSubProductCategory,
                  "onError": self.errorSubProductCategory
              };
              storeApi.makeRequest(request, config);
            }

            self.getSubProductCategoryList = function () {
                var request = {
                    name : "store",
                    method: "GET",
                    url: "/secure/subProductCategory",//TODO collect urls to constants
                };

                var config = {
                    "onSuccess": self.successGetSubProductCategory,
                    "onError": self.errorSubProductCategory
                };
                storeApi.makeRequest(request, config);

            };

            self.successGetProductCategory = function (data) {
              self.productCategoryList = data;
            }

            self.getProductCategoryList = function () {
                var request = {
                    name : "store",
                    method: "GET",
                    url: "/secure/productCategory",//TODO collect urls to constants
                };

                var config = {
                    "onSuccess": self.successGetProductCategory,
                    "onError": self.errorSubProductCategory
                };
                storeApi.makeRequest(request, config);

            };

            self.init = function () {
              self.getProductCategoryList();
              self.getSubProductCategoryList();
            }

          self.init();
        }
    ]);
