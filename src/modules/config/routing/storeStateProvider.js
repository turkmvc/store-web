angular.module("store.routing").provider("storeState",
    ["$stateProvider", "$injector",
        function ($stateProvider, $injector) {
            var self = this;
            this._ = {};

            this._.wrapOnEnterFunction = function (bodyClassList, onEnterFunc) {
                var result;

                if (onEnterFunc) {
                    result = function () {
                        $injector.invoke(onEnterFunc);
                        angular.element("body").addClass(bodyClassList);
                    };
                } else {
                    result = function () {
                        angular.element("body").addClass(bodyClassList);
                    };
                }

                return result;
            };

            this._.wrapOnExitFunction = function (bodyClassList, onExitFunc) {
                var result;

                if (onExitFunc) {
                    result = function () {
                        $injector.invoke(onExitFunc);
                        angular.element("body").removeClass(bodyClassList);
                    };
                } else {
                    result = function () {
                        angular.element("body").removeClass(bodyClassList);
                    };
                }

                return result;
            };

            this.state = function (name, description) {
                var bodyClassList = description.bodyClassList;
                var onEnterFunc, onExitFunc;

                if (bodyClassList) {
                    onEnterFunc = self._.wrapOnEnterFunction(bodyClassList, description.onEnter);
                    onExitFunc = self._.wrapOnExitFunction(bodyClassList, description.onExit);

                    description.onEnter = onEnterFunc;
                    description.onExit = onExitFunc;
                }

                $stateProvider.state(name, description);
                return self;
            };

            return {
                "$get": function () {
                    return undefined;
                },
                "state": self.state
            };
        }
    ]
);
