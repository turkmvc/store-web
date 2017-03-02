angular.module("store.firm").controller("firmController",
    ["firmService",
        function (firmService) {
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

              var config = {
                  "onSuccess": self.successCRUDFirm,
                  "onError": self.errorFirm
              };
              firmService.updateFirm(config, data);
            }

            self.deleteFirm = function () {
              var data = {
                id: self.firmId,
                name: self.firmName
              };
              var config = {
                  "onSuccess": self.successCRUDFirm,
                  "onError": self.errorFirm
              };
              firmService.deleteFirm(config, data);
            }

            self.saveFirm = function () {
              var data = {
                name: self.firmName
              };

              var config = {
                  "onSuccess": self.successCRUDFirm,
                  "onError": self.errorFirm
              };
              firmService.saveFirm(config, data);
            }

            self.getFirmList = function () {

                var config = {
                    "onSuccess": self.successGetFirm,
                    "onError": self.errorFirm
                };
                firmService.getFirmList(config);

            };

            self.getFirmList();

        }
    ]);
