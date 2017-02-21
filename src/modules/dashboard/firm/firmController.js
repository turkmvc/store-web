angular.module("store.firm").controller("firmController",
    ["storeApi",
        function (storeApi) {
            "use strict";
            var self = this;
            self.firmList = [];
            self.firmId = "";
            self.firmName = "";

            self.successGetFirm = function (data) {
              self.firmList = data;
            }

            self.successCRUDFirm = function (data) {
              self.getFirmList();
            }

            self.errorFirm = function (data) {

            }

            self.setFirm = function (firm) {
              self.firmId = firm.id;
              self.firmName = firm.name;
            }

            self.updateFirm = function () {
              var data = {
                id: self.firmId,
                name: self.firmName
              };
              var request = {
                  name : "store",
                  method: "UPDATE",
                  url: "/secure/firm",//TODO collect urls to constants
                  data: data
              };

              var config = {
                  "onSuccess": self.successCRUDFirm,
                  "onError": self.errorFirm
              };
              storeApi.makeRequest(request, config);
            }

            self.deleteFirm = function () {
              var data = {
                id: self.firmId,
                name: self.firmName
              };
              var request = {
                  name : "store",
                  method: "DELETE",
                  url: "/secure/firm",//TODO collect urls to constants
                  data: data
              };

              var config = {
                  "onSuccess": self.successCRUDFirm,
                  "onError": self.errorFirm
              };
              storeApi.makeRequest(request, config);
            }

            self.saveFirm = function () {
              var data = {
                name: self.firmName
              };
              var request = {
                  name : "store",
                  method: "PUT",
                  url: "/secure/firm",//TODO collect urls to constants
                  data: data
              };

              var config = {
                  "onSuccess": self.successCRUDFirm,
                  "onError": self.errorFirm
              };
              storeApi.makeRequest(request, config);
            }

            self.getFirmList = function () {
                var request = {
                    name : "store",
                    method: "GET",
                    url: "/secure/firm",//TODO collect urls to constants
                };

                var config = {
                    "onSuccess": self.successGetFirm,
                    "onError": self.errorFirm
                };
                storeApi.makeRequest(request, config);

            };

            self.getFirmList();

        }
    ]);
