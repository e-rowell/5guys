import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { Http, Response } from 'angular2/http';

import { EventsService } from '../../services/event.service';
import { FileUploadService } from '../../services/file-upload.service';
import { IEvent } from '../event/event';
import { EntryFormComponent } from '../entry-form/entry-form.component';

@Component({
    templateUrl: 'app/components/event/event.component.html',
    styleUrls: ['app/components/event/event.component.css'],
    directives: [EntryFormComponent],
    providers: [EventsService, FileUploadService]
})
/**
 * Class that display the details for the event.
 */
export class EventComponent implements OnInit{

    /**
     * The event the page is displaying
     */
    event: IEvent;

    /**
     * The error message from the EventService.
     */
    errorMessage: string;

    /**
     * Established private services and router variables.
     * @constructor
     * @param _eventsService Service that manages getting the event details.
     * @param _router Router for retrieving information from the redirect.
     * @param _routeParams Route parameter for determining the event to display.
     */
    constructor(private _eventsService: EventsService,
                private _router: Router,
                private _routeParams: RouteParams) {

    }

    ngOnInit() {
        if (!this.event) {
            let eventName = this._routeParams.get('eventName');
            this.getEvent(eventName);
        }
    }

    getEvent(eventName: string) {
        this._eventsService.getEvent(eventName).subscribe(
            event => this.event = event,
            error => this.errorMessage = <any>error);
    }
    
    onBack(): void {
        this._router.navigate(['Events']);
    }
}