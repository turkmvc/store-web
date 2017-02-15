/*
 * Copyright 2003-2015 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 *
 */

/*
 * basePath will be appended to all paths that are not starting with dot "."
 */
var sourceList = [
    "./build/src/app/**/*.js",
    "./build/src/app/*.js",
    "modules/**/*.module.js",
    "modules/**/*.states.js",
    "modules/**/**/*.js",
    "app/*.js",
    "app/config/**/*.js"
];

var basePath = "src/";
var sourceListLength = sourceList.length;

for (var fileIndex = 0; fileIndex < sourceListLength; fileIndex++) {
    //Do not add basePath if full path is given
    if (sourceList[fileIndex][0] !== ".") {
        sourceList[fileIndex] = basePath + sourceList[fileIndex];
    }
}

module.exports = sourceList;
