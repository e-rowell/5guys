import { Component } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import {Headers, HTTP_BINDINGS} from 'angular2/http';

@Component({
    templateUrl: 'app/components/login/login.component.html',
    styleUrls: ['app/components/login/login.component.css'],
    providers: [HTTP_BINDINGS]
})
/**
 * Component for handling user login.
 * @author Nick Hays
 */
export class LoginComponent {
    pageTitle: string = "Login";
    URL: string = "/login2";
    userName: string;
    password: string;

    /**
     * Constructor
     * @param http Instantiates and assigns private Http object.
     */
    constructor(private _http: Http) { }

    /**
     * Signs the user in.
     */
    signIn(): void {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log(this.userName +"and " + this.password);
        this._http.post(this.URL, JSON.stringify("dfsafjdsklfjsaj"), { headers: headers }).map(response => response.json());
    }
}
