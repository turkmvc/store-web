angular.module("store.core")
    .constant("storeEndpointName", "store")
    .constant("defaultEndpointCallbacks", {})
    .config(
        ["$httpProvider", "mmeaHttpProvider", "storeEndpointName", "defaultEndpointCallbacks",
            function ($httpProvider, mmeaHttpProvider, storeEndpointName, defaultEndpointCallbacks) {
                "use strict";

                                      $httpProvider.defaults.headers.common = {};
                                      $httpProvider.defaults.headers.post = {};
                                      $httpProvider.defaults.headers.put = {};
                                      $httpProvider.defaults.headers.patch = {};
                $httpProvider.defaults.headers.common = {
                    "Content-Type" : "application/json",
                    "Accept" : "application/json"
                };

                // $httpProvider.defaults.useXDomain = true;
                $httpProvider.defaults.withCredentials = true;

                mmeaHttpProvider.registerEndpoint(storeEndpointName, defaultEndpointCallbacks);
            }
        ]);
