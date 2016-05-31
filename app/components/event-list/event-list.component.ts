import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { IEvent } from '../event/event';
import { EventsService } from '../../services/event.service';
import { ROUTER_DIRECTIVES } from "angular2/router";

@Component({
    templateUrl: 'app/components/event-list/event-list.component.html',
    styleUrls: ['app/components/event-list/event-list.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [EventsService]
})
export class EventListComponent implements OnInit{
    errorMessage: string;
    events: IEvent[];
    userType: string;

    constructor(private _eventsService: EventsService,
                private _router: Router,
                private _routeParams: RouteParams) { }

    // executes on page load
    ngOnInit(): void {
        this._eventsService.getEvents().subscribe(
                events => this.events = events,
                error => this.errorMessage = <any>error);
        
        if (!this.userType) {
            this.userType = this._routeParams.get('userType');
        }
        console.log(this.userType);
    }
}
