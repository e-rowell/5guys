import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IEntry } from '../components/shared/interfaces/entry';

@Injectable()
/**
 * Service that provides access to Entries in the database.
 * @author Ethan Rowell
 */
export class EntriesService {
    entries: IEntry[];

    /**
     * Constructor.
     *
     * @param _http Instantiates and assigns private Http object.
     */
    constructor(private _http: Http) { }

    /**
     * Gets the entries for a given judge and event.
     *
     * @param judgeName The judge's name.
     * @param eventName The event's name.
     * @returns {Observable<R>}
     */
    getJudgeEntries(judgeName: string, eventName: string): Observable<IEntry[]> {
        let body = JSON.stringify({ judgeName, eventName });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post('/getJudgesEntries', body, options)
            .map((response: Response) => <IEntry[]> response.json())
            //.do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    /**
     * Submits scoring updates to the database.
     *
     * @param judgeName The judge's name who's scores will be updated.
     * @param entries Array of entries to be updated.
     * @returns {Observable<R>}
     */
    submitScoring(judgeName: string, entries: IEntry[]): Observable<any> {
        let body = JSON.stringify({ judgeName, entries });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post('/submitScoring', body, options)
            .map((response: Response) => response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    /**
     * Gets a list of judges.
     * @returns {Observable<R>}
     */
    getJudges(): Observable<string> {
        return this._http.get('/getJudges').map((response: Response) => response.json())
            .catch(this.handleError);
    }

    /**
     * Gets unassigned entries.
     */
    getUnassignedEntries(eventName: string): Observable<IEntry[]> {

    }
    

    /**
     * Handles the error from HTTP request.
     * 
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}