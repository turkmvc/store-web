/*
 * Copyright 2003-2016 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 *
 */

angular.module("store.program").directive("programHeader", function () {

    "use strict";
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/modules/program/header/program-header.html"
    };

});