import { Component, OnInit } from 'angular2/core';

import { TableComponent } from '../shared/table/table.component';
import { IEvent } from '../event/event';
import { EventsService } from '../../services/event.service';

@Component({
    selector: 'event-list',
    templateUrl: 'app/components/event-list/event-list.component.html',
    styleUrls: ['app/components/event-list/event-list.component.css'],
    directives: [TableComponent],
    providers: [EventsService]
})
export class EventListComponent {
    headerNames:string[] = ["Category", "Event Name", "Event Start", "Event End", "Status"];
    columnTypes:string[] = ["string", "string", "string", "string", "string"];
    errorMessage: string;
    events: IEvent[];

    constructor(private _eventsService: EventsService) { }

    ngOnInit(): void {
        this._eventsService.getEvents().subscribe(
                events => this.events = events,
                error => this.errorMessage = <any>error);
    }
}
