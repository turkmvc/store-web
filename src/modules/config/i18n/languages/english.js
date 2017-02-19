/***
 *
 * Copyright 2003-2015 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.

 * Created by semsioglus on 25/01/16.
 */

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
