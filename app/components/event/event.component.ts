import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { Http, Response } from 'angular2/http';

import { EventsService } from '../../services/event.service';
import { IEvent } from '../event/event';

@Component({
    templateUrl: 'app/components/event/event.component.html',
    styleUrls: ['app/components/event/event.component.css'],
    providers: [EventsService]
})
export class EventComponent implements OnInit{
    @Input() eventID: number;
    errorMessage: string;
    event: IEvent;

    pageTitle: string = 'Event Detail';

    /*eventName: string = 'Coloring Contest';*/

    // submission service
    artworkTitle: string;
    fileName: string;
    hasSubmittedEntry: boolean = false;

    // login service
    isLoggedIn: boolean; // check whether the user is logged in as input to the component.
    isJudge: boolean;
    isAdmin: boolean;

    constructor(private _eventsService: EventsService,
                private _router: Router,
                private _routeParams: RouteParams,
                private _http: Http) {
    }


    submitEntry(): void {

    }

    ngOnInit() {
        if (!this.event) {
            let eventName = this._routeParams.get('eventName');
            //console.log(eventName);
            this.getSingleEvent(eventName);
            // console.log(this.event.eventName);
            //this.getEvent(eventName);
            //console.log(this.event.eventName);
        }
    }

    getEvent(eventName: string) {
        console.log("in getEvent");
        console.log(eventName);
        this._eventsService.getEvent(eventName).subscribe(
            event => this.event = event,
            error => this.errorMessage = <any>error);
    }

    getSingleEvent(eventName: string) {
        console.log("in getSingleEvent");
        this._eventsService.getSingleEvent(eventName).subscribe(
            event => this.event = event,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['Events']);
    }
}