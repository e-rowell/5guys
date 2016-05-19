System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var EventsService;
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
            }],
        execute: function() {
            let EventsService = class EventsService {
                constructor(_http) {
                    this._http = _http;
                    this._eventsURL = './api/events/events.json'; // api url
                    this._serverEventsUrl = '/getAllEvents';
                    this._serverSingleEventUrl = '/getSingleEvent';
                }
                getEvents() {
                    return this._http.get('/getAllEvents')
                        .map((response) => response.json())
                        .do(data => console.log('All: ' + JSON.stringify(data)))
                        .catch(this.handleError);
                }
                getEvent(eventName) {
                    let events = this.getEvents();
                    return this.getEvents()
                        .map((events) => events.find(e => e.eventName === eventName));
                }
                getSingleEvent(eventName) {
                    let body = JSON.stringify({ eventName: eventName });
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    console.log(body);
                    return this._http.post('/getSingleEvent', body, { headers: headers })
                        .map((response) => response.json())
                        .catch(this.handleError);
                }
                /*getAllEvents(): Observable<IEvent[]> {
                    return this._http.get(this._serverEventsUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
                }
            
                getSingleEvent(name: string) {
                    let body = JSON.stringify({ name });
                    let headers = new Headers({ 'Content-Type': 'application/json' });
                    let options = new RequestOptions({ headers: headers });
                    
                    return this._http.post(this._serverSingleEventUrl, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
                }*/
                extractData(res) {
                    let body = res.json();
                    return body.data || {};
                }
                handleError(error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                }
            };
            EventsService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], EventsService);
            exports_1("EventsService", EventsService);
        }
    }
});
//# sourceMappingURL=event.service.js.map