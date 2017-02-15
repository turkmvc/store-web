/*
 * Copyright 2003-2016 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 *
 */

var libCssList = [
    "bootstrap/dist/css/bootstrap.min.css"
];

var basePath = "lib/";
var libCssListLength = libCssList.length;

for (var fileIndex = 0; fileIndex < libCssListLength; fileIndex++) {
    libCssList[fileIndex] = basePath + libCssList[fileIndex];
}

module.exports = libCssList;
