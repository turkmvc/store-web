var testLibList = [
    "angular-mocks/angular-mocks.js"
];

var basePath = "lib/";
var testLibListLength = testLibList.length;

for (var fileIndex = 0; fileIndex < testLibListLength; fileIndex++) {
    testLibList[fileIndex] = basePath + testLibList[fileIndex];
}

module.exports = testLibList;
