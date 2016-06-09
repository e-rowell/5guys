System.register(['angular2/core', 'rxjs/add/operator/share'], function(exports_1, context_1) {
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
    var core_1;
    var FileUploadService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            let FileUploadService = class FileUploadService {
                /**
                 * Uploads an array of files to the URL provided.
                 *
                 * @param url The api url to upload to.
                 * @param patronID The patronID of the entrant.
                 * @param artworkTitle Title of the artwork.
                 * @param eventName Event name to be submitted under.
                 * @param files Array of files to be submitted.
                 * @returns {Promise<T>|Promise<R>|Promise}
                 */
                upload(url, patronID, artworkTitle, eventName, files) {
                    return new Promise((resolve, reject) => {
                        let formData = new FormData(), xhr = new XMLHttpRequest();
                        for (let i = 0; i < files.length; i++) {
                            formData.append("uploads[]", files[i], files[i].name);
                        }
                        formData.append("patronID", patronID);
                        formData.append("artworkTitle", artworkTitle);
                        formData.append("eventName", eventName);
                        xhr.onreadystatechange = () => {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200) {
                                    resolve(JSON.parse(xhr.response));
                                }
                                else {
                                    reject(xhr.response);
                                }
                            }
                        };
                        xhr.open('POST', url, true);
                        xhr.send(formData);
                    });
                }
            };
            FileUploadService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], FileUploadService);
            exports_1("FileUploadService", FileUploadService);
        }
    }
});
//# sourceMappingURL=file-upload.service.js.map