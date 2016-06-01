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
                constructor(_eventsService, _submissionService, _router, _routeParams) {
                    this._eventsService = _eventsService;
                    this._submissionService = _submissionService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    // uploadProgress: number; // Observer for the upload progress
                    this.fileName = "";
                    this.artworkTitle = "";
                    this.choseFile = false;
                    // hasSubmittedEntry: boolean = false; // check if user has submitted an entry
                    this.readPolicy = false;
                    this.agreedToPolicy = false;
                    this.filesToUpload = [];
                    // this._fileUploadService.getObserver().subscribe(p => this.uploadProgress = p);
                }
                ngOnInit() {
                    // get entries
                    this.getEntry("Bob", this.event.eventName);
                }
                submitEntry() {
                    this._submissionService.submitEntry("Bob", this.artworkTitle, this.event.eventName, this.filesToUpload)
                        .then((result) => {
                        this.artworkTitle = "";
                        this.fileName = "";
                        this.choseFile = false;
                        this.getEntry("Bob", this.event.eventName);
                        // this.hasSubmittedEntry = true;
                        console.log(result);
                    }, (error) => {
                        console.error(error);
                    });
                    /* // uses the params array
                    this._fileUploadService.upload('/submitEntry',
                        ["Bob", this.artworkTitle, this.event.eventName],
                        this.filesToUpload).then((result) => {
            
                        this.artworkTitle = "";
                        this.fileName = "";
                        this.choseFile = false;
                        this.hasSubmittedEntry = true;
                        console.log(result);
                    }, (error) => {
                        console.error(error);
                    });*/
                }
                getEntry(userName, eventName) {
                    this._submissionService.getEntry(userName, eventName)
                        .subscribe(entry => this.userEntry = entry, error => this.errorMessage = error);
                }
                withdraw() {
                }
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