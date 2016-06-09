import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {FileUploadService} from '../services/file-upload.service';
import {IEntry} from '../components/judge/entry';

/**
 * Submits entries to the database.
 */
@Injectable()
export class SubmissionService {

    

    /**
     * Constructor
     * @param _http Instantiates and assigns private Http object.
     * @param _fileUploadService Instantiates and assigns private FileUploadService object.
     */
    constructor(private _http:Http,
                private _fileUploadService:FileUploadService) {
    }

    /**
     * Submits the entry to the database.
     *
     * @param userName The username to store it under.
     * @param artworkTitle Title of the artwork.
     * @param eventName The name of the event the submission is for.
     * @param filesToUpload The array of files to upload for the submission.
     * @returns {Promise<any>}
     */
    submitEntry(userName:string, artworkTitle:string, eventName:string,
                filesToUpload:Array<File>):Promise<any> {
        // console.log("submitting...");
        return this._fileUploadService.upload('/submitEntry',
            userName, artworkTitle, eventName, filesToUpload);
    }


    /**
     * Gets the entry for the current user.
     *
     * @param username Username of the user to retrieve the entry for.
     * @param eventName The event to get the entry for.
     * @returns {Observable<R>}
     */
    getEntry(username:string, eventName:string):Observable<IEntry> {
        let body = JSON.stringify({username, eventName});
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this._http.post('/getEntry', body, options)
            .map((response:Response) => <IEntry> response.json())
            // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);

    }

    /**
     * Withdraws an entry from the event for a given user.
     * @param username The user whose entry is to be removed.
     * @param eventName The event to remove the entry from.
     * @returns {Observable<R>}
     */
    withdrawEntry(username: string, eventName: string) {
        let body = JSON.stringify({ username, eventName });
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this._http.post('/withdrawEntry', body, options)
            .map((response:Response) => response.json())
            // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);

    }

    /**
     * Handles the error from HTTP request.
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError(error:Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}