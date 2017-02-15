/*
 * Copyright 2003-2015 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 *
 */

var mockDataList = [
    "**"
];

var basePath = "test/mock/";
var mockDataListLength = mockDataList.length;

for (var fileIndex = 0; fileIndex < mockDataListLength; fileIndex++) {
    mockDataList[fileIndex] = basePath + mockDataList[fileIndex];
}

module.exports = mockDataList;
