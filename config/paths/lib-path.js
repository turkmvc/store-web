/*
 * Copyright 2003-2015 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 */
var libList =
[
    "jquery/dist/jquery.js",
    "angular/angular.js",
    "angular-ui-router/release/angular-ui-router.js",
    "angular-bootstrap/ui-bootstrap-tpls.js",
    "bootstrap/dist/js/bootstrap.js",
    "mmea-ng-i18n/mmea-ng-i18n.js",
    "mmea-ng-http/mmea-ng-http.js",
    "mmea-ng-persistence/mmea-ng-persistence.js"
];

var basePath = "lib/";
var libListLength = libList.length;

for (var fileIndex = 0; fileIndex < libListLength; fileIndex++) {
    libList[fileIndex] = basePath + libList[fileIndex];
}

module.exports = libList;
