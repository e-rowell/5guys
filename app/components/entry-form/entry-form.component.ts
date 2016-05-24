import { Component, Input } from 'angular2/core'
import { NgClass } from 'angular2/common';
import { RouteParams, Router } from 'angular2/router';

import { EventsService } from '../../services/event.service';
import { FileUploadService } from '../../services/file-upload.service';
import { IEvent } from '../event/event';

@Component({
    selector: 'entry-form',
    templateUrl: 'app/components/entry-form/entry-form.component.html',
    styleUrls: ['app/components/entry-form/entry-form.component.css'],
    directives: [NgClass],
    providers: [FileUploadService]
})
export class EntryFormComponent {
    @Input() event: IEvent;

    // uploadProgress: number; // Observer for the upload progress
    fileName: string;
    artworkTitle: string = "";
    filesToUpload: Array<File>;

    choseFile: boolean = false;
    hasSubmittedEntry: boolean = false; // check if user has submitted an entry
    readPolicy: boolean = false;
    agreedToPolicy: boolean = false;

    errorMessage: string;

    constructor(private _eventsService: EventsService,
                private _fileUploadService: FileUploadService,
                private _router: Router,
                private _routeParams: RouteParams) {
        this.filesToUpload = [];
        // this._fileUploadService.getObserver().subscribe(p => this.uploadProgress = p);
    }
    
    submitEntry() {
        this._fileUploadService.upload('/upload', ["Bob", this.artworkTitle], this.filesToUpload).then((result) => {
            this.artworkTitle = "";
            this.fileName = "";
            this.choseFile = false;
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
        this.fileName = this.filesToUpload[0].name;
        this.choseFile = true;
    }
}