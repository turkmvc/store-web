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
    .constant("stateNames", {})
    .config(["stateNames", function (stateNames) {

        stateNames.PUB_BASE = "pub";
        stateNames.AUTH_BASE = "auth";
        stateNames.GUEST_BASE = "guest";

        stateNames.LOGIN = stateNames.GUEST_BASE + ".login";
        stateNames.DASHBOARD = stateNames.AUTH_BASE + ".dashboard";
        stateNames.COUNTY = stateNames.AUTH_BASE + ".county";
        stateNames.PRODUCT = stateNames.AUTH_BASE + ".product";
        stateNames.STORE = stateNames.AUTH_BASE + ".store";

}]);
