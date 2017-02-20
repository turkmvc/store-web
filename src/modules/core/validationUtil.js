angular.module("store.core").service("validationUtil", [
    function () {

        var EMAIL_REGEX = /^[0-9a-zA-Z\.\-​_]+@[0-9a-zA-Z\.\-_​]+\.[a-zA-Z\.]{2,4}$/;
        var self = this;

        self.validateEmail = function (email) {
            return EMAIL_REGEX.test(email);
        };

        self.nullCheck = function (password) {
            return password != null || password !== "";
        };

    }
]);
