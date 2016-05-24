import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IEvent } from '../components/event/event';

@Injectable()
export class SubmissionService {
    private _submitURL = ''; // api url
    private progress;
    private progressObserver;

    constructor(private _http: Http) {
        this.progress = Observable.create(observer => {
            this.progressObserver = observer
        }).share();
    }

    submitEntry(): void {
        let body = "";
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        /*this._http.post(this._submitURL,
            body, {
                headers: headers
            })
            .map(response => response.json())
            .subscribe(
                response => this
            )*/
    }

    private makeFileRequest (url: string, params: string[], files: File[]): Observable<any> {
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
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}