System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            }],
        execute: function() {
            let LoginComponent = class LoginComponent {
                constructor(http) {
                    this.pageTitle = "Login";
                    this.URL = "/login2";
                    this._http = http;
                }
                signIn() {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    console.log(this.userName + "and " + this.password);
                    this._http.post(this.URL, JSON.stringify("dfsafjdsklfjsaj"), { headers: headers }).map(response => response.json());
                }
            };
            LoginComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/components/login/login.component.html',
                    styleUrls: ['app/components/login/login.component.css'],
                    providers: [http_2.HTTP_BINDINGS]
                }), 
                __metadata('design:paramtypes', [http_1.Http])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map