System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', '../services/file-upload.service'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, file_upload_service_1;
    var SubmissionService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (file_upload_service_1_1) {
                file_upload_service_1 = file_upload_service_1_1;
            }],
        execute: function() {
            /**
             * Submits entries to the database.
             * @author Ethan Rowell
             */
            let SubmissionService = class SubmissionService {
                /**
                 * Constructor
                 * @param _http Instantiates and assigns private Http object.
                 * @param _fileUploadService Instantiates and assigns private FileUploadService object.
                 */
                constructor(_http, _fileUploadService) {
                    this._http = _http;
                    this._fileUploadService = _fileUploadService;
                }
                /**
                 * Submits the entry to the database.
                 *
                 * @param patronID The patrons assigned ID number.
                 * @param artworkTitle Title of the artwork.
                 * @param eventName The name of the event the submission is for.
                 * @param filesToUpload The array of files to upload for the submission.
                 * @returns {Promise<any>}
                 */
                submitEntry(patronID, artworkTitle, eventName, filesToUpload) {
                    return this._fileUploadService.upload('/submitEntry', patronID, artworkTitle, eventName, filesToUpload);
                }
                /**
                 * Gets the entry for the current user.
                 *
                 * @param patronID Patron ID of the user to retrieve the entry for.
                 * @param eventName The event to get the entry for.
                 * @returns {Observable<R>}
                 */
                getEntry(patronID, eventName) {
                    let body = JSON.stringify({ patronID: patronID, eventName: eventName });
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post('/getEntry', body, options)
                        .map((response) => response.json())
                        .catch(this.handleError);
                }
                /**
                 * Withdraws an entry from the event for a given user.
                 *
                 * @param patronID The patron's ID whose entry is to be removed.
                 * @param eventName The event to remove the entry from.
                 * @returns {Observable<R>}
                 */
                withdrawEntry(patronID, eventName) {
                    let body = JSON.stringify({ patronID: patronID, eventName: eventName });
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_1.RequestOptions({ headers: headers });
                    console.log("in submission withdraw");
                    return this._http.post('/withdrawEntry', body, options)
                        .map((response) => response.json())
                        .catch(this.handleError);
                }
                /**
                 * Handles the error from HTTP request.
                 *
                 * @param error
                 * @returns {ErrorObservable}
                 */
                handleError(error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                }
            };
            SubmissionService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http, file_upload_service_1.FileUploadService])
            ], SubmissionService);
            exports_1("SubmissionService", SubmissionService);
        }
    }
});
//# sourceMappingURL=submission.service.js.map