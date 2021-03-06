"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var app_component_1 = require('./components/app.component');
var app_routing_1 = require('./components/app.routing');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt/angular2-jwt');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    router_1.provideRouter(app_routing_1.appRoutes),
    angular2_jwt_1.AUTH_PROVIDERS,
    http_1.HTTP_PROVIDERS
])
    .catch(function (err) { return console.log("Error bootstrapping App " + err); });
//# sourceMappingURL=main.js.map