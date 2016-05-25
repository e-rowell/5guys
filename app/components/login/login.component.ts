import { Component } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import {Headers, HTTP_BINDINGS} from 'angular2/http';

@Component({
    templateUrl: 'app/components/login/login.component.html',
    styleUrls: ['app/components/login/login.component.css'],
    providers: [HTTP_BINDINGS]
})
export class LoginComponent {
    pageTitle: string = "Login";
    URL: string = "/login2";
    userName: string;
    password: string;
    private _http: Http;

    constructor(http: Http) { 
        this._http = http;
    }
    signIn(): void {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log(this.userName +"and " + this.password);
        this._http.post(this.URL, JSON.stringify("dfsafjdsklfjsaj"), { headers: headers }).map(response => response.json());
    }
}
