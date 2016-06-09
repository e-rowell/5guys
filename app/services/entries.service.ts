import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IEntry } from '../components/judge/entry';

@Injectable()
export class EntriesService {
    entries: IEntry[];

    constructor(private _http: Http) { }



    getJudgeEntries(judgeName: string, eventName: string): Observable<IEntry[]> {
        let body = JSON.stringify({ judgeName, eventName });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post('/getJudgesEntries', body, options)
            .map((response: Response) => <IEntry[]> response.json())
            //.do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }



    // TODO send updated scoring for assignedEntries back to server
    submitScoring(judgeName: string, entries: IEntry[]): Observable<any> {
        let body = JSON.stringify({ judgeName, entries });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post('/submitScoring', body, options)
            .map((response: Response) => response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    
    getJudges(): Observable<string> {
        return this._http.get('/getJudges').map((response: Response) => response.json())
            .catch(this.handleError);
    }
    
    //getUnassignedEntries(eventName: string): Observable<IEntry[]> {
        // TODO get entries who don't have an assigned judge name for librarian
    //}
    

    /**
     * Handles the error from HTTP request.
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}