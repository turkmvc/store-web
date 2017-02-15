/*
 * Copyright 2003-2016 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 *
 * Created by semsioglus on 25/01/15.
 */

angular.module("store.program").controller("programBudgetContainerController",
    [
        function () {

            "use strict";

            var self = this;

            self.isBelowThreshold = (self.progressBarConfig.currentValue < self.progressBarConfig.threshold);

            if (!this.isBelowThreshold) {
                self.secondBarValue = self.progressBarConfig.currentValue - self.progressBarConfig.threshold;
            }

            this.percentageText = self.progressBarConfig.currentValue.toString();

            if (self.progressBarConfig.isPercentage) {
                self.percentageText = self.percentageText + "%";
            }

        }]);
