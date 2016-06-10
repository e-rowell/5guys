import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { ROUTER_DIRECTIVES } from "angular2/router";

import { EventsService } from '../../services/event.service';
import { IEvent } from '../shared/interfaces/event';
import { IUser } from '../shared/interfaces/user';

@Component({
    templateUrl: 'app/components/event-list/event-list.component.html',
    styleUrls: ['app/components/event-list/event-list.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [EventsService]
})
/**
 * Displays the current events.
 * @author Ethan Rowell
 */
export class EventListComponent implements OnInit{

    /**
     * The error message.
     */
    errorMessage: string;

    /**
     * The list of events to display.
     */
    events: IEvent[];

    /**
     * The current user browsing.
     */
    currentUser: IUser;

    /**
     * Constructor
     * @param _eventsService Instantiates and assigns private EventService object.
     * @param _router Instantiates and assigns private Router object.
     * @param _routeParams Instantiates and assigns private RouteParams object.
     */
    constructor(private _eventsService: EventsService,
                private _router: Router,
                private _routeParams: RouteParams) { }

    /**
     * Executes on page load after data bound objects have been initialized.
     */
    ngOnInit(): void {
        this._eventsService.getEvents().subscribe(
                events => this.events = events,
                error => this.errorMessage = <any>error);
        
        if (!this.currentUser) {
            this.currentUser = this._routeParams.get('currentUser');
        }
    }
}
