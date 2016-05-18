import { Component, OnInit } from 'angular2/core';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { HomeComponent } from '../../home/home.component';
import { EventListComponent } from '../../event-list/event-list.component';
import { EventComponent } from '../../event/event.component';
 

@Component({
    selector: 'nav-comp',
    templateUrl: 'app/components/shared/nav/nav.component.html',
    styleUrls: ['app/components/shared/nav/nav.component.css'],
    directives: [ROUTER_DIRECTIVES, NavComponent],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
export class NavComponent implements OnInit{
    tooltipText: string = 'Team Members: Ethan Rowell, Nicholas Hays, Jacob Tillett, Edward Koval, Ben Pasero';

    ngOnInit(): void {
        $('.easterEgg').attr({
         'data-toggle': 'tooltip',
         'data-placement':'left',
         'title': this.tooltipText
        }).tooltip();
    }
}
