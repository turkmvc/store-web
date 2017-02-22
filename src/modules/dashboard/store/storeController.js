angular.module("store.store").controller("storeController",
    ["storeApi",
        function (storeApi) {
            "use strict";
            var self = this;
            self.countyList = [];
            self.storeList = [];
            self.storeId = "";
            self.storeName = "";

            self.successGetCounty = function (data) {
              self.countyList = data;
            }
            self.getCountyList = function () {
                var request = {
                    name : "store",
                    method: "GET",
                    url: "/secure/county",//TODO collect urls to constants
                };

                var config = {
                    "onSuccess": self.successGetCounty,
                    "onError": self.errorStore
                };
                storeApi.makeRequest(request, config);

            };

            self.successGetStore = function (data) {
              self.storeList = data;
            }

            self.successCRUDStore = function (data) {
              self.getStoreList();
            }

            self.errorStore = function (data) {

            }

            self.setStore = function (store) {
              self.storeId = store.id;
              self.storeName = store.name;
            }

            self.updateStore = function () {
              var data = {
                id: self.storeId,
                name: self.storeName
              };
              var request = {
                  name : "store",
                  method: "UPDATE",
                  url: "/secure/store",//TODO collect urls to constants
                  data: data
              };

              var config = {
                  "onSuccess": self.successCRUDStore,
                  "onError": self.errorStore
              };
              storeApi.makeRequest(request, config);
            }

            self.deleteStore = function () {
              var data = {
                id: self.storeId,
                name: self.storeName
              };
              var request = {
                  name : "store",
                  method: "DELETE",
                  url: "/secure/store",//TODO collect urls to constants
                  data: data
              };

              var config = {
                  "onSuccess": self.successCRUDStore,
                  "onError": self.errorStore
              };
              storeApi.makeRequest(request, config);
            }

            self.saveStore = function () {
              var data = {
                name: self.storeName
              };
              var request = {
                  name : "store",
                  method: "PUT",
                  url: "/secure/store",//TODO collect urls to constants
                  data: data
              };

              var config = {
                  "onSuccess": self.successCRUDStore,
                  "onError": self.errorStore
              };
              storeApi.makeRequest(request, config);
            }

            self.getStoreList = function () {
                var request = {
                    name : "store",
                    method: "GET",
                    url: "/secure/store",//TODO collect urls to constants
                };

                var config = {
                    "onSuccess": self.successGetStore,
                    "onError": self.errorStore
                };
                storeApi.makeRequest(request, config);

            };

            self.init = function () {
              self.getCountyList();
              self.getStoreList();
            }

            self.init();

        }
    ]);
