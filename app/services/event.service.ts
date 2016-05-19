import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IEvent } from '../components/event/event';

@Injectable()
export class EventsService {
    private _eventsURL: string = './api/events/events.json'; // api url
    private _serverEventsUrl: string = '/getAllEvents';
    private _serverSingleEventUrl: string = '/getSingleEvent';
    constructor(private _http: Http) { }

    getEvents(): Observable<IEvent[]> {
        return this._http.get('/getAllEvents')
            .map((response: Response) => <IEvent[]> response.json())
            //.do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getEvent(eventName: string): Observable<IEvent> {
        return this.getEvents()
            .map((events: IEvent[]) => events.find(e => e.eventName === eventName));
            //.do(data => console.log('All: ' +  JSON.stringify(data)));
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}