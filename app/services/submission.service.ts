import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {FileUploadService} from '../services/file-upload.service';
import { IEntry } from '../components/judge/entry';

@Injectable()
export class SubmissionService {
    private _submitURL = ''; // api url
    private progress;
    private progressObserver;

    private entry: IEntry;
    
    constructor(private _http:Http,
                private _fileUploadService:FileUploadService) {
        this.progress = Observable.create(observer => {
            this.progressObserver = observer
        }).share();
    }

    submitEntry(userName:string, artworkTitle:string, eventName:string,
                filesToUpload:Array<File>):Promise<any> {
        console.log("submitting...");
        return this._fileUploadService.upload('/submitEntry',
            userName, artworkTitle, eventName, filesToUpload);
    }


    getEntry(username: string, eventName: string): Observable<IEntry> {
        let body = JSON.stringify({ username, eventName });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post('/getEntry', body, options)
            .map((response: Response) => <IEntry> response.json())
            //.do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
        
    }

    /*private makeFileRequest (url: string, params: string[], files: File[]): Observable<any> {
     return Observable.create(observer => {
     let formData: FormData = new FormData(),
     xhr: XMLHttpRequest = new XMLHttpRequest();

     for (let i = 0; i < files.length; i++) {
     formData.append("uploads[]", files[i], files[i].name);
     }

     xhr.onreadystatechange = () => {
     if (xhr.readyState === 4) {
     if (xhr.status === 200) {
     observer.next(JSON.parse(xhr.response));
     observer.complete();
     } else {
     observer.error(xhr.response);
     }
     }
     };

     xhr.upload.onprogress = (event) => {
     this.progress = Math.round(event.loaded / event.total * 100);

     this.progressObserver.next(this.progress);
     };

     xhr.open('POST', url, true);
     xhr.send(formData);
     });
     }*/

    private handleError(error:Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}