import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IEvent } from '../components/event/event';

@Injectable()
/**
 * Gets current events.
 */
export class EventsService {

    /**
     *Constructor
     * @param _http Instantiates and assigns private Http object.
     */
    constructor(private _http: Http) { }

    /**
     * Gets all the current events.
     * @returns {Observable<R>}
     */
    getEvents(): Observable<IEvent[]> {
        return this._http.get('/getAllEvents')
            .map((response: Response) => <IEvent[]> response.json())
            //.do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    /**
     * Gets the individual event from the events list.
     * @param eventName
     * @returns {Observable<R>}
     */
    getEvent(eventName: string): Observable<IEvent> {
        return this.getEvents()
            .map((events: IEvent[]) => events.find(e => e.eventName === eventName));
            //.do(data => console.log('All: ' +  JSON.stringify(data)));
    }

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