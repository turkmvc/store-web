angular.module("store.county").controller("countyController",
    ["storeApi",
        function (storeApi) {
            "use strict";
            var self = this;
            self.countyList = [];

            self.successGetCounty = function (data) {
              debugger;
              self.countyList = data;
            }

            self.errorGetCounty = function (data) {

            }

            self.getCountyList = function () {
                var request = {
                    name : "store",
                    method: "GET",
                    url: "http://localhost:8080/secure/county",//TODO collect urls to constants
                };

                var config = {
                    "onSuccess": self.successGetCounty,
                    "onError": self.errorGetCounty
                };
                storeApi.makeRequest(request, config);

            };

            self.getCountyList();

        }
    ]);
