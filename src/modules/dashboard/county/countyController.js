angular.module("store.county").controller("countyController",
    ["countyService",
        function (countyService) {
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

              var config = {
                  "onSuccess": self.successCRUDCounty,
                  "onError": self.errorCounty
              };
              countyService.updateCounty(config, data);
            }

            self.deleteCounty = function () {
              var data = {
                id: self.countyId,
                name: self.countyName
              };

              var config = {
                  "onSuccess": self.successCRUDCounty,
                  "onError": self.errorCounty
              };
              countyService.deleteCounty(config, data);
            }

            self.saveCounty = function () {
              var data = {
                name: self.countyName
              };
              var config = {
                  "onSuccess": self.successCRUDCounty,
                  "onError": self.errorCounty
              };
              countyService.saveCounty(config, data);
            }

            self.getCountyList = function () {
                var config = {
                    "onSuccess": self.successGetCounty,
                    "onError": self.errorCounty
                };
                countyService.getCountyList(config);
            };

            self.getCountyList();

        }
    ]);
