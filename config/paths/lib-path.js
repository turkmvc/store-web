var libList =
[
    "jquery/dist/jquery.js",
    "angular/angular.js",
    "angular-ui-router/release/angular-ui-router.js",
    "semantic-ui/dist/semantic.js",
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
