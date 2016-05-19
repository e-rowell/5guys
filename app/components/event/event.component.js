System.register(['angular2/core', 'angular2/router', 'angular2/http', '../../services/event.service'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, event_service_1;
    var EventComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            }],
        execute: function() {
            let EventComponent = class EventComponent {
                constructor(_eventsService, _router, _routeParams, _http) {
                    this._eventsService = _eventsService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._http = _http;
                    this.pageTitle = 'Event Detail';
                    this.hasSubmittedEntry = false;
                }
                submitEntry() {
                }
                ngOnInit() {
                    if (!this.event) {
                        let eventName = this._routeParams.get('eventName');
                        //console.log(eventName);
                        this.getSingleEvent(eventName);
                    }
                }
                getEvent(eventName) {
                    console.log("in getEvent");
                    console.log(eventName);
                    this._eventsService.getEvent(eventName).subscribe(event => this.event = event, error => this.errorMessage = error);
                }
                getSingleEvent(eventName) {
                    console.log("in getSingleEvent");
                    this._eventsService.getSingleEvent(eventName).subscribe(event => this.event = event, error => this.errorMessage = error);
                }
                onBack() {
                    this._router.navigate(['Events']);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Number)
            ], EventComponent.prototype, "eventID", void 0);
            EventComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/components/event/event.component.html',
                    styleUrls: ['app/components/event/event.component.css'],
                    providers: [event_service_1.EventsService]
                }), 
                __metadata('design:paramtypes', [event_service_1.EventsService, router_1.Router, router_1.RouteParams, http_1.Http])
            ], EventComponent);
            exports_1("EventComponent", EventComponent);
        }
    }
});
//# sourceMappingURL=event.component.js.map