import { Component, Input, OnInit } from 'angular2/core'
import { NgClass } from 'angular2/common';
import { RouteParams, Router } from 'angular2/router';

import { EventsService } from '../../services/event.service';
import { SubmissionService } from '../../services/submission.service';
import { IEvent } from '../event/event';
import { IEntry } from '../judge/entry';

@Component({
    selector: 'entry-form',
    templateUrl: 'app/components/entry-form/entry-form.component.html',
    styleUrls: ['app/components/entry-form/entry-form.component.css'],
    directives: [NgClass],
    providers: [SubmissionService]
})
export class EntryFormComponent implements OnInit {
    @Input() event: IEvent;
    userEntry: IEntry;

    // uploadProgress: number; // Observer for the upload progress
    fileName: string = "";
    artworkTitle: string = "";
    filesToUpload: Array<File>;

    choseFile: boolean = false;
    // hasSubmittedEntry: boolean = false; // check if user has submitted an entry
    readPolicy: boolean = false;
    agreedToPolicy: boolean = false;

    errorMessage: string;

    constructor(private _eventsService: EventsService,
                private _submissionService: SubmissionService,
                private _router: Router,
                private _routeParams: RouteParams) {
        this.filesToUpload = [];
        // this._fileUploadService.getObserver().subscribe(p => this.uploadProgress = p);
    }

    ngOnInit(): void {
        // get entries
        this.getEntry("Bob", this.event.eventName);
    }


    submitEntry() {
        this._submissionService.submitEntry("Bob", this.artworkTitle, this.event.eventName, this.filesToUpload)
            .then((result) => {
                this.artworkTitle = "";
                this.fileName = "";
                this.choseFile = false;

                this.getEntry("Bob", this.event.eventName);
                // this.hasSubmittedEntry = true;


                console.log(result);
            }, (error) => {
                console.error(error);
            });

        /* // uses the params array
        this._fileUploadService.upload('/submitEntry',
            ["Bob", this.artworkTitle, this.event.eventName],
            this.filesToUpload).then((result) => {

            this.artworkTitle = "";
            this.fileName = "";
            this.choseFile = false;
            this.hasSubmittedEntry = true;
            console.log(result);
        }, (error) => {
            console.error(error);
        });*/
    }

    getEntry(userName: string, eventName: string) {
        this._submissionService.getEntry(userName, eventName)
            .subscribe(entry => this.userEntry = entry,
            error => this.errorMessage = <any>error);
    }





    withdraw() {

    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
        this.fileName = this.filesToUpload[0].name;
        this.choseFile = true;
    }
}