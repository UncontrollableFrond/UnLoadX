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
var io = require('socket.io-client');
var core_1 = require('@angular/core');
var ReplaySubject_1 = require('rxjs/ReplaySubject');
var requestData;
var SocketService = (function () {
    function SocketService() {
        var _this = this;
        // private _url = 'http://52.9.136.53:3000';
        this._url = 'http://localhost:3000';
        this._socket = io.connect(this._url);
        this.requestDataSource = new ReplaySubject_1.ReplaySubject();
        this.setRequestData();
        setTimeout(function () {
            _this.requestDataSource.next(true);
        }, 15000);
    }
    // service command that emits that requestData is available
    SocketService.prototype.setRequestDataAvailable = function () {
        console.log('From SocketService.setRequestDataAvailable - Setting requestDataAvailable to true');
        this.requestDataSource.next(true);
    };
    SocketService.prototype.setRequestData = function () {
        this._socket.on('receive-requests', function (requests) {
            requestData = requests;
            console.log('Received requests data from server', requestData);
            this.setRequestDataAvailable();
        }.bind(this));
    };
    SocketService.prototype.sendServers = function (serverPost) {
        this._socket.emit('receive-post', serverPost);
        console.log("Emitted " + JSON.stringify(serverPost) + " to server socket");
    };
    SocketService.prototype.getData = function () {
        return requestData;
    };
    SocketService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SocketService);
    return SocketService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SocketService;
//# sourceMappingURL=socket.service.js.map