/*
 * Copyright 2003-2016 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 *
 */

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