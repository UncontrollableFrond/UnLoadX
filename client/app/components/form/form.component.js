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
var forms_1 = require('@angular/forms');
var ipPort_1 = require('../types/ipPort');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var formItem_component_1 = require('./formItem/formItem.component');
var socket_service_1 = require('../socket/socket.service');
var auth_service_1 = require('../../authentication/auth.service');
var enable_directive_1 = require('../../directives/enable.directive');
var FormComponent = (function () {
    function FormComponent(Router, SocketService, Auth) {
        var _this = this;
        this.Router = Router;
        this.SocketService = SocketService;
        this.Auth = Auth;
        this.servers = [new ipPort_1.ipPort(null, null, null, null)];
        this.signInNotifier = false;
        this.lb = Auth.lbStatus;
        this._subscription = Auth.lbUp.subscribe(function (val) {
            _this.lb = val;
            console.log('event detected from form component');
        });
    }
    FormComponent.prototype.onSubmit = function () {
        if (!!this.Auth.authenticated()) {
            var models = this.formItemComponents._results.map(function (item) { return item.model; });
            models = models.slice(0, models.length - 1);
            var formData = {
                authUserId: JSON.parse(localStorage.getItem('profile')).user_id,
                servers: models,
                volume: this.numReqModel
            };
            this.SocketService.sendServers(formData);
            this.Router.navigate(['/graphs']);
        }
        else {
            this.signInNotifier = true;
        }
    };
    FormComponent.prototype.addFormItem = function (model) {
        this.servers.push(model);
    };
    __decorate([
        core_1.ViewChildren(formItem_component_1.FormItemComponent), 
        __metadata('design:type', Object)
    ], FormComponent.prototype, "formItemComponents", void 0);
    FormComponent = __decorate([
        core_1.Component({
            selector: 'my-form',
            templateUrl: './client/app/components/form/form.component.html',
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, formItem_component_1.FormItemComponent, enable_directive_1.EnableButtonDirective],
            providers: [http_1.HTTP_PROVIDERS, socket_service_1.default],
            styleUrls: ['./client/app/components/form/form.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, socket_service_1.default, auth_service_1.Auth])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map