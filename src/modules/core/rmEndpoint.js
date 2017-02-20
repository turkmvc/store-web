angular.module("store.core")
    .constant("storeEndpointName", "store")
    .config(
        ["$httpProvider", "mmeaHttpProvider", "storeEndpointName",
            function ($httpProvider, mmeaHttpProvider, storeEndpointName) {
                "use strict";

                $httpProvider.defaults.headers.common = {
                    "Content-type" : "application/json",
                    "Accept" : "application/json"
                };
                var defaultEndpointCallbacks = {
                    "defaultSuccessCallback": function () {
                        //TODO: Add default callback
                        console.log("defaultSuccessCallback");
                    },

                    "defaultErrorCallback": function () {
                        //TODO: Add default callback
                        console.log("defaultErrorCallback");
                    },

                    "defaultAlwaysCallback": function () {
                        //TODO: Add default callback
                        console.log("defaultAlwaysCallback");
                    }
                };

                mmeaHttpProvider.registerEndpoint(storeEndpointName, defaultEndpointCallbacks);
            }
        ]);
