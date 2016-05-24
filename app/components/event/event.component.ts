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
     * The progress of the upload
     */
    // uploadProgress: number; // Observer for the upload progress

    /**
     * The array of file uploads
     */
    filesToUpload: Array<File>;

    /**
     * The title of the artwork.
     */
    artworkTitle: string;

    /**
     * Whether the user has submitted an entry or not.
     */
    hasSubmittedEntry: boolean = false; // check if user has submitted an entry

    /**
     * The error message from the EventService.
     */
    errorMessage: string;

    /**
     * User read the privacy policy.
     */
    readPrivacyPolicy: boolean = false;

    /**
     * 
     */
    agreedToPolicy: boolean = false;

    /**
     * Established private services and router variables.
     * @constructor
     * @param _eventsService Service that manages getting the event details.
     * @param _fileUploadService Service that manages uploading the the submission.
     * @param _router Router for retrieving information from the redirect.
     * @param _routeParams Route parameter for determining the event to display.
     */
    constructor(private _eventsService: EventsService,
                private _fileUploadService: FileUploadService,
                private _router: Router,
                private _routeParams: RouteParams) {
        this.filesToUpload = [];
        // this._fileUploadService.getObserver().subscribe(p => this.uploadProgress = p);
    }

    /**
     * Submits the entry.
     */
    submitEntry() {
        this._fileUploadService.upload('/upload', ["Bob", this.artworkTitle], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }

    /**
     *
     * @param fileInput
     */
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
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