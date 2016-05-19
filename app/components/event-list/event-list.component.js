System.register(['angular2/core', '../../services/event.service', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, event_service_1, router_1;
    var EventListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let EventListComponent = class EventListComponent {
                constructor(_eventsService) {
                    this._eventsService = _eventsService;
                }
                // executes on page load
                ngOnInit() {
                    this._eventsService.getEvents().subscribe(events => this.events = events, error => this.errorMessage = error);
                }
            };
            EventListComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/components/event-list/event-list.component.html',
                    styleUrls: ['app/components/event-list/event-list.component.css'],
                    directives: [router_1.ROUTER_DIRECTIVES],
                    providers: [event_service_1.EventsService]
                }), 
                __metadata('design:paramtypes', [event_service_1.EventsService])
            ], EventListComponent);
            exports_1("EventListComponent", EventListComponent);
        }
    }
});
//# sourceMappingURL=event-list.component.js.map