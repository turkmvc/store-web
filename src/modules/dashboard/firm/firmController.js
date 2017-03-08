angular.module("store.firm").controller("firmController",
    ["firmService", "firmTypeService",
        function (firmService, firmTypeService) {
            "use strict";
            var self = this;
            self.firmTypeList = [];
            self.firmList = [];
            self.firmId = "";
            self.firmName = "";
            self.selectedFirmType = {
              id: -1,
              name: "Firm Types"
            };

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
              self.selectedFirmType = firm.firmType;
            }

            self.updateFirm = function () {
              var data = {
                id: self.firmId,
                name: self.firmName,
                firmType: self.selectedFirmType
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
                name: self.firmName,
                firmType: self.selectedFirmType
              };
              var config = {
                  "onSuccess": self.successCRUDFirm,
                  "onError": self.errorFirm
              };
              firmService.deleteFirm(config, data);
            }

            self.saveFirm = function () {
              var data = {
                name: self.firmName,
                firmType: self.selectedFirmType
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

            self.successGetFirmType = function (data) {
              self.firmTypeList = data;
            }

            self.selectFirmType = function (firmType) {
              self.selectedFirmType = firmType;
            }

            self.init = function () {
              self.getFirmList();
              var config = {
                  "onSuccess": self.successGetFirmType,
                  "onError": self.errorFirm
              };
              firmTypeService.getFirmTypeList(config);
            }

            self.init();

        }
    ]);
