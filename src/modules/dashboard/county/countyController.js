angular.module("store.county").controller("countyController",
    ["storeApi",
        function (storeApi) {
            "use strict";
            var self = this;
            self.countyList = [];
            self.countyId = "";
            self.countyName = "";

            self.successGetCounty = function (data) {
              self.countyList = data;
            }

            self.successCRUDCounty = function (data) {
              self.getCountyList();
            }

            self.errorCounty = function (data) {

            }

            self.setCounty = function (county) {
              self.countyId = county.id;
              self.countyName = county.name;
            }

            self.updateCounty = function () {
              var data = {
                id: self.countyId,
                name: self.countyName
              };
              var request = {
                  name : "store",
                  method: "UPDATE",
                  url: "http://localhost:8080/secure/county",//TODO collect urls to constants
                  data: data
              };

              var config = {
                  "onSuccess": self.successCRUDCounty,
                  "onError": self.errorCounty
              };
              storeApi.makeRequest(request, config);
            }

            self.deleteCounty = function () {
              var data = {
                id: self.countyId,
                name: self.countyName
              };
              var request = {
                  name : "store",
                  method: "DELETE",
                  url: "http://localhost:8080/secure/county",//TODO collect urls to constants
                  data: data
              };

              var config = {
                  "onSuccess": self.successCRUDCounty,
                  "onError": self.errorCounty
              };
              storeApi.makeRequest(request, config);
            }

            self.saveCounty = function () {
              var data = {
                name: self.countyName
              };
              var request = {
                  name : "store",
                  method: "PUT",
                  url: "http://localhost:8080/secure/county",//TODO collect urls to constants
                  data: data
              };

              var config = {
                  "onSuccess": self.successCRUDCounty,
                  "onError": self.errorCounty
              };
              storeApi.makeRequest(request, config);
            }

            self.getCountyList = function () {
                var request = {
                    name : "store",
                    method: "GET",
                    url: "http://localhost:8080/secure/county",//TODO collect urls to constants
                };

                var config = {
                    "onSuccess": self.successGetCounty,
                    "onError": self.errorCounty
                };
                storeApi.makeRequest(request, config);

            };

            self.getCountyList();

        }
    ]);
