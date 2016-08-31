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
var networkGraph = (function () {
    function networkGraph() {
    }
    networkGraph.prototype.ngOnInit = function () {
        var color = d3.scale.category20();
        this.options = {
            chart: {
                type: 'forceDirectedGraph',
                height: 400,
                width: 600,
                margin: { top: 20, right: 20, bottom: 20, left: 0 },
                radius: 15,
                linkDist: 400,
                color: function (d) {
                    return color(d.group);
                },
                nodeExtras: function (node) {
                    node && node
                        .append("text")
                        .attr("dx", 20)
                        .attr("dy", ".35em")
                        .text(function (d) { return d.name; })
                        .style('font-size', '15px')
                        .style('fill', 'white');
                }
            }
        };
        this.data = { "nodes": [
                { "name": "Load Balancer", "group": 1 },
                { "name": "Client", "group": 2 },
                { "name": "Server 1", "group": 3 },
                { "name": "Server 2", "group": 3 }
            ],
            "links": [
                { "source": 1, "target": 0, "value": 10 },
                { "source": 2, "target": 0, "value": 2 },
                { "source": 3, "target": 0, "value": 2 }
            ]
        };
    };
    __decorate([
        core_1.ViewChild(ng2_nvd3_1.nvD3), 
        __metadata('design:type', ng2_nvd3_1.nvD3)
    ], networkGraph.prototype, "nvD3", void 0);
    networkGraph = __decorate([
        core_1.Component({
            selector: 'networkGraph',
            directives: [ng2_nvd3_1.nvD3],
            templateUrl: './client/app/components/graphs/networkGraph/networkGraph.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], networkGraph);
    return networkGraph;
}());
exports.networkGraph = networkGraph;
//# sourceMappingURL=networkGraph.graph.js.map