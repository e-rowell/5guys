System.register(['angular2/core', 'angular2/router', '../../services/event.service', '../../services/file-upload.service', '../entry-form/entry-form.component', '../judge/judge.component', '../librarian/librarian.component'], function(exports_1, context_1) {
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
    var core_1, router_1, event_service_1, file_upload_service_1, entry_form_component_1, judge_component_1, librarian_component_1;
    var EventComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            },
            function (file_upload_service_1_1) {
                file_upload_service_1 = file_upload_service_1_1;
            },
            function (entry_form_component_1_1) {
                entry_form_component_1 = entry_form_component_1_1;
            },
            function (judge_component_1_1) {
                judge_component_1 = judge_component_1_1;
            },
            function (librarian_component_1_1) {
                librarian_component_1 = librarian_component_1_1;
            }],
        execute: function() {
            let EventComponent = class EventComponent {
                /**
                 * Established private services and router variables.
                 * @constructor
                 * @param _eventsService Service that manages getting the event details.
                 * @param _router Router for retrieving information from the redirect.
                 * @param _routeParams Route parameter for determining the event to display.
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
                    if (!this.event) {
                        let eventName = this._routeParams.get('eventName');
                        this.getEvent(eventName);
                    }
                    if (!this.currentUser) {
                        this.currentUser = this._routeParams.get('currentUser');
                    }
                }
                /**
                 * Gets the event information.
                 * @param eventName The event name to retrieve.
                 */
                getEvent(eventName) {
                    this._eventsService.getEvent(eventName).subscribe(event => this.event = event, error => this.errorMessage = error);
                }
                /**
                 * On browser back.
                 */
                onBack() {
                    this._router.navigate(['Events']);
                }
            };
            EventComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/components/event/event.component.html',
                    styleUrls: ['app/components/event/event.component.css'],
                    directives: [entry_form_component_1.EntryFormComponent, judge_component_1.JudgeComponent, librarian_component_1.LibrarianComponent],
                    providers: [event_service_1.EventsService, file_upload_service_1.FileUploadService]
                }), 
                __metadata('design:paramtypes', [event_service_1.EventsService, router_1.Router, router_1.RouteParams])
            ], EventComponent);
            exports_1("EventComponent", EventComponent);
        }
    }
});
//# sourceMappingURL=event.component.js.map