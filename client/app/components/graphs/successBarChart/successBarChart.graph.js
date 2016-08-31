"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_nvd3_1 = require('.././ng2-nvd3/lib/ng2-nvd3');
var successBarChart = (function () {
    function successBarChart() {
    }
    successBarChart.prototype.ngOnInit = function () {
        this.options = {
            chart: {
                type: 'discreteBarChart',
                height: 300,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function (d) { return d.label; },
                y: function (d) { return d.value; },
                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',0%')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'Server #'
                },
                yAxis: {
                    axisLabel: '% requests successfully handled by load balancer',
                    axisLabelDistance: -10
                }
            }
        };
        this.data = [
            {
                key: "Server Latencies",
                values: [
                    {
                        "label": "Server1",
                        "value": 80
                    },
                    {
                        "label": "Server2",
                        "value": 90
                    }
                ]
            }
        ];
    };
    successBarChart.prototype.ngAfterViewInit = function () {
        this.nvD3.chart.update();
    };
    __decorate([
        core_1.ViewChild(ng2_nvd3_1.nvD3), 
        __metadata('design:type', ng2_nvd3_1.nvD3)
    ], successBarChart.prototype, "nvD3", void 0);
    successBarChart = __decorate([
        core_1.Component({
            selector: 'successBarChart',
            directives: [ng2_nvd3_1.nvD3],
            templateUrl: './client/app/components/graphs/successBarChart/successBarChart.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], successBarChart);
    return successBarChart;
}());
exports.successBarChart = successBarChart;
//# sourceMappingURL=successBarChart.graph.js.map