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
                .state(stateNames.COUNTY, {
                    "url": "/county",
                    "views": {
                        "contentContainer": {
                            "controller": "countyController as county",
                            "templateUrl": "/modules/dashboard/county/county.html"
                        }
                    }
                })
                .state(stateNames.PRODUCT, {
                    "params": {
                    },
                    "url": "/product",
                    "views": {
                        "contentContainer": {
                            "controller": "productController as product",
                            "templateUrl": "/modules/dashboard/product/product.html"
                        }
                    }
                })
                .state(stateNames.STORE, {
                    "params": {
                    },
                    "url": "/store",
                    "views": {
                        "contentContainer": {
                            "controller": "storeController as store",
                            "templateUrl": "/modules/dashboard/store/store.html"
                        }
                    }
                })
        }
    ]);
