import { Component } from 'angular2/core';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';



@Injectable()
export class FileUploadService {
    /**
     * @param Observable<number>
     */
    private progress$: Observable<number>;

    /**
     * @type {number}
     */
    private progress: number = 0;

    private progressObserver: any;

    constructor () {
        this.progress$ = new Observable(observer => {
            this.progressObserver = observer
        });
    }

    /**
     * @returns {Observable<number>}
     */
    public getObserver (): Observable<number> {
        return this.progress$;
    }

    /**
     * Upload files through XMLHttpRequest
     *
     * @param url
     * @param params
     * @param files
     * @returns {Promise<any>}
     */
    public upload (url: string,  params: Array<string>, files: File[]): Promise<any> {
        return new Promise((resolve, reject) => {
            let formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }

            for (let i = 0; i < params.length; i++) {
                formData.append("params[]", params[i]);
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            FileUploadService.setUploadUpdateInterval(500);
            
            /*
            xhr.upload.onprogress = (event) => {
                this.progress = Math.round(event.loaded / event.total * 100);

                this.progressObserver.next(this.progress);
            };
            */

            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }

    /**
     * Set interval for frequency with which Observable inside Promise will share data with subscribers.
     *
     * @param interval
     */
    private static setUploadUpdateInterval (interval: number): void {
        setInterval(() => {}, interval);
    }
}