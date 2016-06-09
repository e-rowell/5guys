System.register(['angular2/core', 'angular2/router', '../../services/event.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, event_service_1;
    var EventListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            }],
        execute: function() {
            let EventListComponent = class EventListComponent {
                /**
                 * Constructor
                 * @param _eventsService Instantiates and assigns private EventService object.
                 * @param _router Instantiates and assigns private Router object.
                 * @param _routeParams Instantiates and assigns private RouteParams object.
                 */
                constructor(_eventsService, _router, _routeParams) {
                    this._eventsService = _eventsService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                /**
                 * Executes on page load after data bound objects have been initialized.
                 */
                ngOnInit() {
                    this._eventsService.getEvents().subscribe(events => this.events = events, error => this.errorMessage = error);
                    if (!this.currentUser) {
                        this.currentUser = this._routeParams.get('currentUser');
                    }
                }
            };
            EventListComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/components/event-list/event-list.component.html',
                    styleUrls: ['app/components/event-list/event-list.component.css'],
                    directives: [router_2.ROUTER_DIRECTIVES],
                    providers: [event_service_1.EventsService]
                }), 
                __metadata('design:paramtypes', [event_service_1.EventsService, router_1.Router, router_1.RouteParams])
            ], EventListComponent);
            exports_1("EventListComponent", EventListComponent);
        }
    }
});
//# sourceMappingURL=event-list.component.js.map