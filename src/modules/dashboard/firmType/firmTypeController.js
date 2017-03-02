angular.module("store.firmType").controller("firmTypeController",
    ["firmTypeService",
        function (firmTypeService) {
            "use strict";
            var self = this;
            self.firmTypeList = [];
            self.firmTypeId = "";
            self.firmTypeName = "";

            self.successGetFirmType = function (data) {
              self.firmTypeList = data;
            }

            self.successCRUDFirmType = function (data) {
              self.getFirmTypeList();
            }

            self.errorFirmType = function (data) {

            }

            self.setFirmType = function (firmType) {
              self.firmTypeId = firmType.id;
              self.firmTypeName = firmType.name;
            }

            self.updateFirmType = function () {
              var data = {
                id: self.firmTypeId,
                name: self.firmTypeName
              };

              var config = {
                  "onSuccess": self.successCRUDFirmType,
                  "onError": self.errorFirmType
              };
              debugger;
              firmTypeService.updateFirmType(config, data);
            }

            self.deleteFirmType = function () {
              var data = {
                id: self.firmTypeId,
                name: self.firmTypeName
              };
              var config = {
                  "onSuccess": self.successCRUDFirmType,
                  "onError": self.errorFirmType
              };
              firmTypeService.deleteFirmType(config, data);
            }

            self.saveFirmType = function () {
              var data = {
                name: self.firmTypeName
              };

              var config = {
                  "onSuccess": self.successCRUDFirmType,
                  "onError": self.errorFirmType
              };
              firmTypeService.saveFirmType(config, data);
            }

            self.getFirmTypeList = function () {

                var config = {
                    "onSuccess": self.successGetFirmType,
                    "onError": self.errorFirmType
                };
                firmTypeService.getFirmTypeList(config);

            };

            self.getFirmTypeList();

        }
    ]);
