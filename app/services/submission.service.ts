import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IEvent } from '../components/event/event';

@Injectable()
export class SubmissionService {
    private _submitURL = ''; // api url

    constructor(private _http: Http) { }

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


    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}