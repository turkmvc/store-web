var mockDataList = [
    "**"
];

var basePath = "test/mock/";
var mockDataListLength = mockDataList.length;

for (var fileIndex = 0; fileIndex < mockDataListLength; fileIndex++) {
    mockDataList[fileIndex] = basePath + mockDataList[fileIndex];
}

module.exports = mockDataList;
