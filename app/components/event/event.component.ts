import { Component, Input } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { EventsService } from '../../services/event.service';
import { IEvent } from '../event/event';

@Component({
    templateUrl: 'app/components/event/event.component.html',
    styleUrls: ['app/components/event/event.component.css'],
    providers: [EventsService]
})
export class EventComponent {
    @Input() eventID: number;
    errorMessage: string;
    event: IEvent;

    pageTitle: string = 'Event Detail';

    eventName: string = 'Coloring Contest';

    // submission service
    artworkTitle: string;
    fileName: string;
    hasSubmittedEntry: boolean = true;

    // login service
    isLoggedIn: boolean; // check whether the user is logged in as input to the component.
    isJudge: boolean;
    isAdmin: boolean;

    constructor(private _eventsService: EventsService,
                private _router: Router,
                private _routerParams: RouteParams) { }


    submitEntry(): void {

    }

    getEvent(id: number) {
        this._eventsService.getEvent(id).subscribe(
            event => this.event = event,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['Events']);
    }
}