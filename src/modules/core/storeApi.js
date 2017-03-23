angular.module("store.core").service("storeApi",
    ["mmeaHttp",
    function (mmeaHttp) {

        var self = this;

        self.makeRequest = function (request, config) {

          request.url = "http://localhost:8080" + request.url;
          return mmeaHttp.makeRequest(request.name, request, config);
        }

    }
]);
