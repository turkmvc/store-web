angular.module("store.core").factory("sessionHttpInterceptor",
    ["$injector", "$q",
        function ($injector, $q) {
            "use strict";

            return {
                response: function (response) {
                    return response;
                },
                responseError: function (response) {
                    if (response.status === 401) {
                        response.data = {};
                        response.data.status = 401;
                    }
                    return $q.reject(response);
                }
            };
        }
    ]
);

angular.module("store.core").config(
    ["$httpProvider",
        function ($httpProvider) {
            "use strict";
            $httpProvider.interceptors.push("sessionHttpInterceptor");
        }
    ]
);
