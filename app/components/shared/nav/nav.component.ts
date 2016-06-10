///<reference path="../interfaces/user.ts"/>
import { Component, OnInit } from 'angular2/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router';
import { NgFor } from "angular2/common";
import { IUser } from '../interfaces/user';

@Component({
    selector: 'nav-comp',
    templateUrl: 'app/components/shared/nav/nav.component.html',
    styleUrls: ['app/components/shared/nav/nav.component.css'],
    directives: [ROUTER_DIRECTIVES, NavComponent, NgFor],
    providers: [ROUTER_PROVIDERS]
})
/**
 * Page navigation and footer.
 * @author Ethan Rowell
 */
export class NavComponent implements OnInit {
    tooltipText: string = 'Team Members: Ethan Rowell, Nicholas Hays, Jacob Tillett, Edward Koval, Ben Pasero';
    userTypes = [ "Public", "Patron", "Judge" ];
    currentUser: IUser;
    selectedUserType: string = "Public";

    constructor() {
        this.currentUser = <IUser>{};
        this.currentUser.userType = "Public";
    }

    /**
     * On change event.
     * @param newValue The new value to update.
     */
    onChange(newValue) {
        this.selectedUserType = newValue;
    }

    /**
     * Sets the current user's information from the Login inputs.
     */
    setUser() {
        this.currentUser.patronID = $('#patronID').val();
        this.currentUser.username = $('#username').val();
        this.currentUser.userType = $('#userType').val();
    }

    /**
     * Executes on page load after data bound objects have been initialized.
     */
    ngOnInit(): void {
        $('.easterEgg').attr({
         'data-toggle': 'tooltip',
         'data-placement':'top',
         'title': this.tooltipText
        }).tooltip();

        // $('#patronID').inputmask('number')
    }
}
