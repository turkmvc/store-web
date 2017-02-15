/*
 * Copyright 2003-2016 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 *
 */

angular.module("store.routing")
    .config(["$stateProvider", "stateNames",
    function ($stateProvider, stateNames) {
        $stateProvider
            .state(stateNames.GUEST_BASE, {
                "abstract": true
            })
            .state(stateNames.PUB_BASE, {
                "abstract": true
            })
            .state(stateNames.AUTH_BASE, {
                "abstract": true
            })
            .state(stateNames.DASHBOARD, {
                "url": "/dashboard",
                "views": {
                    "appContainer@": {
                        "controller": "dashboardController",
                        "templateUrl": "/modules/dashboard/dashboard.html"
                    }
                }
            })
            .state(stateNames.LOGIN, {
                "url": "/login",
                "views": {
                    "appContainer@": {
                        "controller": "loginController",
                        "templateUrl": "/modules/login/login.html"
                    }
                }
            });
    }]
);
