/*
 * Copyright 2003-2015 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 *
 */

var testLibList = [
    "angular-mocks/angular-mocks.js"
];

var basePath = "lib/";
var testLibListLength = testLibList.length;

for (var fileIndex = 0; fileIndex < testLibListLength; fileIndex++) {
    testLibList[fileIndex] = basePath + testLibList[fileIndex];
}

module.exports = testLibList;
