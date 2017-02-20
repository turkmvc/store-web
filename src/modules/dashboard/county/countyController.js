angular.module("store.county").controller("countyController",
    ["storeApi",
        function (storeApi) {
            "use strict";
            var self = this;
            self.countyList = [];
            self.countyId = "";
            self.countyName = "a";

            self.successGetCounty = function (data) {
              self.countyList = data;
            }

            self.successSaveCounty = function (data) {
              self.getCountyList();
            }

            self.errorCounty = function (data) {

            }

            self.setCounty = function (county) {
              self.countyId = county.id;
              self.countyName = county.name;
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
                  "onSuccess": self.successSaveCounty,
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
