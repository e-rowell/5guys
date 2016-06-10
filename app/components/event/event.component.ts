import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { EventsService } from '../../services/event.service';
import { FileUploadService } from '../../services/file-upload.service';
import { IEvent } from '../shared/interfaces/event';
import { IUser } from '../shared/interfaces/user';
import { EntryFormComponent } from '../entry-form/entry-form.component';
import { JudgeComponent } from '../judge/judge.component';
import { LibrarianComponent } from '../librarian/librarian.component';

@Component({
    templateUrl: 'app/components/event/event.component.html',
    styleUrls: ['app/components/event/event.component.css'],
    directives: [EntryFormComponent, JudgeComponent, LibrarianComponent],
    providers: [EventsService, FileUploadService]
})
/**
 * Class that displays the details for the event.
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
     * Determines which view to show (Patron, Librarian, Judge) based on the user's type.
     */
    currentUser: IUser;

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

    /**
     * Executes on page load after data bound objects have been initialized.
     */
    ngOnInit() {
        if (!this.event) {
            let eventName = this._routeParams.get('eventName');
            this.getEvent(eventName);
        }

        if (!this.currentUser) {
            this.currentUser = this._routeParams.get('currentUser');
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