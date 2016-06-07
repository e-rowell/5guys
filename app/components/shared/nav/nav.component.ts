import { Component, OnInit } from 'angular2/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router';
import { NgFor } from "angular2/common";

@Component({
    selector: 'nav-comp',
    templateUrl: 'app/components/shared/nav/nav.component.html',
    styleUrls: ['app/components/shared/nav/nav.component.css'],
    directives: [ROUTER_DIRECTIVES, NavComponent, NgFor],
    providers: [ROUTER_PROVIDERS]
})
/**
 * Page navigation and footer.
 */
export class NavComponent implements OnInit{
    tooltipText: string = 'Team Members: Ethan Rowell, Nicholas Hays, Jacob Tillett, Edward Koval, Ben Pasero';
    userTypes = [ "Patron", "Librarian", "Judge" ];
    currentUserType: string = "Patron";

    /**
     * On change event.
     * @param newValue The new value to update.
     */
    onChange(newValue) {
        this.currentUserType = newValue;
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
    }
}
