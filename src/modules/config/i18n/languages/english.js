angular.module("store.core").config(["i18nProvider", "supportedLanguages",
    function (i18nProvider, supportedLanguages) {
        "use strict";

        i18nProvider.translations[supportedLanguages.ENGLISH] = {
            dashboard: "Dashboard",
            county: "County",
            store: "Store",
            product: "Product"
        }
    }]);
