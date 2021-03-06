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
var serverhealthchart_component_1 = require('../graphs/serverHealthChart/serverhealthchart.component');
var server_stats_component_1 = require('../graphs/server-stats/server-stats.component');
var ServerHealthComponent = (function () {
    function ServerHealthComponent() {
    }
    ServerHealthComponent.prototype.ngOnInit = function () {
        this.serverData = this.requestData.serverhealth;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ServerHealthComponent.prototype, "requestData", void 0);
    ServerHealthComponent = __decorate([
        core_1.Component({
            selector: 'server-health',
            templateUrl: './client/app/components/serverhealth/serverhealth.component.html',
            styleUrls: ['./client/app/components/serverhealth/serverhealth.component.css'],
            directives: [serverhealthchart_component_1.serverHealthChart, server_stats_component_1.ServerStatsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ServerHealthComponent);
    return ServerHealthComponent;
}());
exports.ServerHealthComponent = ServerHealthComponent;
//# sourceMappingURL=serverhealth.component.js.map