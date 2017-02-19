angular.module("store.dashboard")
    .config(["storeStateProvider", "stateNames",
        function (storeStateProvider, stateNames) {
            "use strict";

            storeStateProvider
                .state(stateNames.DASHBOARD, {
                    "params": {
                    },
                    "url": "/dashboard",
                    "views": {
                        "contentContainer": {
                            "controller": "dashboardController as dashboard",
                            "templateUrl": "/modules/dashboard/dashboard.html"
                        }
                    }
                })
        }
    ]);
