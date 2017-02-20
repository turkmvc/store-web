var specList = [
    "**"
];

var basePath = "test/spec/";
var specListLength = specList.length;

for (var fileIndex = 0; fileIndex < specListLength; fileIndex++) {
    specList[fileIndex] = basePath + specList[fileIndex];
}

module.exports = specList;
