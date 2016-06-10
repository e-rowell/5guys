System.register(['angular2/core', 'angular2/common', 'angular2/router', '../../services/event.service', '../../services/submission.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, event_service_1, submission_service_1;
    var EntryFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            },
            function (submission_service_1_1) {
                submission_service_1 = submission_service_1_1;
            }],
        execute: function() {
            let EntryFormComponent = class EntryFormComponent {
                /**
                 * Constructor
                 * @param _eventsService Instantiates and assigns private EventService object.
                 * @param _submissionService Instantiates and assigns private SubmissionService object.
                 * @param _router Instantiates and assigns private Router object.
                 * @param _routeParams Instantiates and assigns private RouteParams object.
                 */
                constructor(_eventsService, _submissionService, _router, _routeParams) {
                    this._eventsService = _eventsService;
                    this._submissionService = _submissionService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    /**
                     * The current user.
                    currentUser: string = "Peter";*/
                    /**
                     * Name of the file.
                     */
                    this.fileName = "";
                    /**
                     * Title of the artwork.
                     */
                    this.artworkTitle = "";
                    /**
                     * User has chosen a file.
                     */
                    this.choseFile = false;
                    /**
                     * user has read the privacy policy.
                     */
                    this.readPolicy = false;
                    /**
                     * User has agreed to the privacy policy.
                     */
                    this.agreedToPolicy = false;
                    this.filesToUpload = [];
                }
                /**
                 * Executes on page load after data bound objects have been initialized.
                 */
                ngOnInit() {
                    this.getEntry(this.currentUser.patronID, this.event.eventName);
                }
                /**
                 * Gets the user's entry for the event.
                 * @param patronID The user.
                 * @param eventName The event.
                 */
                getEntry(patronID, eventName) {
                    this._submissionService.getEntry(patronID, eventName)
                        .subscribe(entry => this.userEntry = entry, error => this.errorMessage = error);
                }
                /**
                 * Submits the entry to the database.
                 */
                submitEntry() {
                    this._submissionService.submitEntry(this.currentUser.patronID, this.artworkTitle, this.event.eventName, this.filesToUpload)
                        .then((result) => {
                        this.artworkTitle = "";
                        this.fileName = "";
                        this.choseFile = false;
                        this.getEntry(this.currentUser.patronID, this.event.eventName);
                        // console.log(result);
                    }, (error) => {
                        console.error(error);
                    });
                }
                /**
                 * Withdraws the entry from the event.
                 */
                withdraw() {
                }
                /**
                 * Assigns the new file selected.
                 * @param fileInput The new file to assign.
                 */
                fileChangeEvent(fileInput) {
                    this.filesToUpload = fileInput.target.files;
                    this.fileName = this.filesToUpload[0].name;
                    this.choseFile = true;
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], EntryFormComponent.prototype, "event", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], EntryFormComponent.prototype, "currentUser", void 0);
            EntryFormComponent = __decorate([
                core_1.Component({
                    selector: 'entry-form',
                    templateUrl: 'app/components/entry-form/entry-form.component.html',
                    styleUrls: ['app/components/entry-form/entry-form.component.css'],
                    directives: [common_1.NgClass],
                    providers: [submission_service_1.SubmissionService]
                }), 
                __metadata('design:paramtypes', [event_service_1.EventsService, submission_service_1.SubmissionService, router_1.Router, router_1.RouteParams])
            ], EntryFormComponent);
            exports_1("EntryFormComponent", EntryFormComponent);
        }
    }
});
//# sourceMappingURL=entry-form.component.js.map