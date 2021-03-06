System.register(['angular2/core', 'angular2/common', 'angular2/http', 'rxjs/Rx', 'angular2/router', '../shared/nav/nav.component', '../home/home.component', '../event/event.component', '../event-list/event-list.component'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1, router_1, nav_component_1, home_component_1, event_component_1, event_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (event_component_1_1) {
                event_component_1 = event_component_1_1;
            },
            function (event_list_component_1_1) {
                event_list_component_1 = event_list_component_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor() {
                    this.pageTitle = 'Clark Country Library';
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'ccl-app',
                    template: `<nav-comp></nav-comp>`,
                    styles: ['app/components/app.component.css', 'app/assets/site.css'],
                    directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, nav_component_1.NavComponent],
                    providers: [http_1.HTTP_PROVIDERS]
                }),
                router_1.RouteConfig([
                    { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                    { path: '/events/:currentUser', name: 'Events', component: event_list_component_1.EventListComponent },
                    { path: '/events/:eventName/:currentUser', name: 'EventDetail', component: event_component_1.EventComponent }
                ]), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map