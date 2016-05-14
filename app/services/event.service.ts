import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IEvent } from '../components/event/event';

@Injectable()
export class EventsService {
    private _eventsURL = './api/events/events.json'; // api url

    constructor(private _http: Http) { }

    getEvents(): Observable<IEvent[]> {
        return this._http.get(this._eventsURL)
            .map((response: Response) => <IEvent[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getEvent(id: number): Observable<IEvent> {
        return this.getEvents()
            .map((events: IEvent[]) => events.find(e => e.eventID === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}