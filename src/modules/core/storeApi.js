angular.module("store.core").service("storeApi",
    ["mmeaHttp",
    function (mmeaHttp) {

        var self = this;

        self.makeRequest = function (request, config) {
            mmeaHttp.makeRequest(request.name, request, config);
        }

    }
]);
