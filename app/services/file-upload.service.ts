import { Injectable } from 'angular2/core';
import 'rxjs/add/operator/share';

@Injectable()
/**
 * Uploads files.
 * @author Ethan Rowell
 */
export class FileUploadService {

    /**
     * Uploads an array of files to the URL provided.
     * 
     * @param url The api url to upload to.
     * @param patronID The patronID of the entrant.
     * @param artworkTitle Title of the artwork.
     * @param eventName Event name to be submitted under.
     * @param files Array of files to be submitted.
     * @returns {Promise<T>|Promise<R>|Promise}
     */
    public upload (url: string, patronID: number, artworkTitle: string,
                   eventName: string, files: File[]): Promise<any> {
        return new Promise((resolve, reject) => {
            let formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            
            formData.append("patronID", patronID);
            formData.append("artworkTitle", artworkTitle);
            formData.append("eventName", eventName);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }
}