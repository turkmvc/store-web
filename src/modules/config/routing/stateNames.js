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
        stateNames.PRODUCT_CATEGORY = stateNames.AUTH_BASE + ".productCategory";
        stateNames.SUB_PRODUCT_CATEGORY = stateNames.AUTH_BASE + ".subProductCategory";
        stateNames.STORE = stateNames.AUTH_BASE + ".store";

}]);
