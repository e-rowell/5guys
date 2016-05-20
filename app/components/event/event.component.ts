import { Component, Input, OnInit, NgZone } from 'angular2/core';
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
    errorMessage: string;
    event: IEvent;

    filesToUpload: Array<File>;

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
        this.filesToUpload = [];
    }

    upload() {
        this.makeFileRequest("/upload", [], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
        console.log(this.filesToUpload);
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
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