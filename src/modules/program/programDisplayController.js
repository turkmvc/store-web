/*
 * Copyright 2003-2016 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 *
 */

angular.module("store.program").controller("programDisplayController",
    [
        function () {

            "use strict";

            var self = this;

            //TODO data will be taken from service response and will be passed to this directive
            self.program = {
                name: "PEGASUS",
                dueDates: "24 NOV 2015 - 10 JAN 2016",
                displayMonth: "DECEMBER",
                actualBudget: "60",
                actualMonthBudget: "50",
                costPerformanceIdx: "1.2",
                totalBudget: "120",
                totalMonthBudget: "60",
                completePercent: "50",
                lastSynced: "TODAY 9.30"
            };

            self.overallBudget = {
                title: "OVERALL BUDGET",
                progressBarConfig: {
                    minValue: 0,
                    maxValue: 100,
                    threshold: 100,
                    currentValue: self.program.completePercent,
                    showMinMax: false,
                    isPercentage: true
                },
                info: [
                    {
                        title: "TOTAL BUDGET",
                        value: self.program.totalBudget
                    },
                    {
                        title: "ACTUAL BUDGET",
                        value: self.program.actualBudget
                    }
                ]
            };

            self.monthlyBudget = {
                title: self.program.displayMonth,
                progressBarConfig: {
                    minValue: 0,
                    maxValue: 100,
                    threshold: 100,
                    currentValue: self.program.completePercent,
                    showMinMax: false,
                    isPercentage: true
                },
                percent: self.program.completePercent,
                info: [
                    {
                        title: "MONTH TOTAL",
                        value: self.program.totalMonthBudget
                    },
                    {
                        title: "MONTH ACTUAL",
                        value: self.program.actualMonthBudget
                    }
                ]
            };

            self.costPerformanceIndex = {
                title: "CPI",
                progressBarConfig: {
                    maxValue: 2,
                    minValue: 0,
                    threshold: 1,
                    currentValue: self.program.costPerformanceIdx,
                    showMinMax: true,
                    isPercentage: false
                },
                info: [
                    {
                        title: "DOING FINE",
                        value: self.program.costPerformanceIdx
                    }
                ]
            };
        }]);
