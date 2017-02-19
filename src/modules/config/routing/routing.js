angular.module("store.routing")
    .config(["storeStateProvider", "stateNames",
    function (storeStateProvider, stateNames) {
        storeStateProvider
            .state(stateNames.GUEST_BASE, {
                "abstract": true
            })
            .state(stateNames.PUB_BASE, {
                "abstract": true
            })
            .state(stateNames.AUTH_BASE, {
                "abstract": true,
                "views": {
                    "appContainer@": {
                        "templateUrl": "/modules/authenticated/authenticated-layout.html"
                      }
                }
            })
            .state(stateNames.LOGIN, {
                "url": "/login",
                "views": {
                    "appContainer@": {
                        "controller": "loginController as login",
                        "templateUrl": "/modules/login/login.html"
                    }
                }
            });
    }]
);
