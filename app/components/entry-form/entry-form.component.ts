import { Component, Input, OnInit } from 'angular2/core'
import { NgClass } from 'angular2/common';
import { RouteParams, Router } from 'angular2/router';

import { EventsService } from '../../services/event.service';
import { SubmissionService } from '../../services/submission.service';
import { IEvent } from '../shared/interfaces/event';
import { IEntry } from '../shared/interfaces/entry';
import { IUser } from '../shared/interfaces/user';

@Component({
    selector: 'entry-form',
    templateUrl: 'app/components/entry-form/entry-form.component.html',
    styleUrls: ['app/components/entry-form/entry-form.component.css'],
    directives: [NgClass],
    providers: [SubmissionService]
})
/**
 * Form for submitting entries.
 * @author Ethan Rowell
 */
export class EntryFormComponent implements OnInit {

    /**
     * The event the entry from is for.
     */
    @Input() event: IEvent;

    /**
     * Represents the user submitting an entry.
     */
    @Input() currentUser: IUser;

    /**
     * User's entry object.
     */
    userEntry: IEntry;

    /**
     * Name of the file.
     */
    fileName: string = "";

    /**
     * Title of the artwork. 
     */
    artworkTitle: string = "";

    /**
     * Files to upload for submission.
     */
    filesToUpload: Array<File>;

    /**
     * User has chosen a file. 
     */
    choseFile: boolean = false;

    /**
     * user has read the privacy policy. 
     */
    readPolicy: boolean = false;

    /**
     * User has agreed to the privacy policy. 
     */
    agreedToPolicy: boolean = false;

    /**
     * The error message from failed HTTP requests.
     */
    errorMessage: string;

    /**
     * Constructor
     * @param _eventsService Instantiates and assigns private EventService object.
     * @param _submissionService Instantiates and assigns private SubmissionService object.
     * @param _router Instantiates and assigns private Router object.
     * @param _routeParams Instantiates and assigns private RouteParams object.
     */
    constructor(private _eventsService: EventsService,
                private _submissionService: SubmissionService,
                private _router: Router,
                private _routeParams: RouteParams) {
        this.filesToUpload = [];
    }

    /**
     * Executes on page load after data bound objects have been initialized.
     */
    ngOnInit(): void {
        this.getEntry(this.currentUser.patronID, this.event.eventName);
    }

    /**
     * Gets the user's entry for the event.
     * 
     * @param patronID The user.
     * @param eventName The event.
     */
    getEntry(patronID: number, eventName: string) {
        this._submissionService.getEntry(patronID, eventName)
            .subscribe(entry => this.userEntry = entry,
                error => this.errorMessage = <any>error);
    }

    /**
     * Submits the entry to the database.
     */
    submitEntry() {
        this._submissionService.submitEntry(this.currentUser.patronID, this.artworkTitle,
            this.event.eventName, this.filesToUpload)
            .then((result) => {
                this.artworkTitle = "";
                this.fileName = "";
                this.choseFile = false;

                this.getEntry(this.currentUser.patronID, this.event.eventName);

                // console.log(result);
            }, (error) => {
                console.error(error);
            });
    }

    /**
     * Withdraws the entry from the event.
     */
    withdrawEntry() {
        console.log("in withdraw");
        this._submissionService.withdrawEntry(this.currentUser.patronID, this.event.eventName);
    }

    /**
     * Assigns the new file selected.
     * 
     * @param fileInput The new file to assign.
     */
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
        this.fileName = this.filesToUpload[0].name;
        this.choseFile = true;
    }
}