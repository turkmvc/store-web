angular.module("store.core").config(["i18nProvider", "supportedLanguages",
    function (i18nProvider, supportedLanguages) {
        "use strict";

        i18nProvider.translations[supportedLanguages.ENGLISH] = {
            dashboard: "Dashboard",
            county: "County",
            store: "Store",
            product_category: "Product Category",
            sub_product_category: "Sub Product Category",
            product: "Product",
            firm: "Firm"
        }
    }]);
