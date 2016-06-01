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
            let SubmissionService = class SubmissionService {
                constructor(_http, _fileUploadService) {
                    this._http = _http;
                    this._fileUploadService = _fileUploadService;
                    this._submitURL = ''; // api url
                    this.progress = Observable_1.Observable.create(observer => {
                        this.progressObserver = observer;
                    }).share();
                }
                submitEntry(userName, artworkTitle, eventName, filesToUpload) {
                    console.log("submitting...");
                    return this._fileUploadService.upload('/submitEntry', userName, artworkTitle, eventName, filesToUpload);
                }
                getEntry(username, eventName) {
                    let body = JSON.stringify({ username: username, eventName: eventName });
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post('/getEntry', body, options)
                        .map((response) => response.json())
                        .catch(this.handleError);
                }
                /*private makeFileRequest (url: string, params: string[], files: File[]): Observable<any> {
                 return Observable.create(observer => {
                 let formData: FormData = new FormData(),
                 xhr: XMLHttpRequest = new XMLHttpRequest();
            
                 for (let i = 0; i < files.length; i++) {
                 formData.append("uploads[]", files[i], files[i].name);
                 }
            
                 xhr.onreadystatechange = () => {
                 if (xhr.readyState === 4) {
                 if (xhr.status === 200) {
                 observer.next(JSON.parse(xhr.response));
                 observer.complete();
                 } else {
                 observer.error(xhr.response);
                 }
                 }
                 };
            
                 xhr.upload.onprogress = (event) => {
                 this.progress = Math.round(event.loaded / event.total * 100);
            
                 this.progressObserver.next(this.progress);
                 };
            
                 xhr.open('POST', url, true);
                 xhr.send(formData);
                 });
                 }*/
                handleError(error) {
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
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