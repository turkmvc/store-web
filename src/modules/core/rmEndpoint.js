/*
 * Copyright 2003-2016 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 *
 */

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