import { Component, OnInit } from 'angular2/core';

/*import { TableComponent } from '../shared/table/table.component';*/
import { IEvent } from '../event/event';
import { EventsService } from '../../services/event.service';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {EventComponent} from "../event/event.component";

@Component({
    templateUrl: 'app/components/event-list/event-list.component.html',
    styleUrls: ['app/components/event-list/event-list.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [EventsService]
})
export class EventListComponent implements OnInit{
    errorMessage: string;
    events: IEvent[];

    constructor(private _eventsService: EventsService) { }

    // executes on page load
    ngOnInit(): void {
        this._eventsService.getEvents().subscribe(
                events => this.events = events,
                error => this.errorMessage = <any>error);
    }
}
