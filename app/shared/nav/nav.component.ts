import { Component, OnInit } from 'angular2/core';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { HomeComponent } from '../../home/home.component';
import { EventComponent } from '../../event/event.component';


@Component({
    selector: 'nav-comp',
    templateUrl: 'app/shared/nav/nav.component.html',
    styleUrls: ['app/shared/nav/nav.component.css'],
    directives: [ROUTER_DIRECTIVES, NavComponent],
    providers: [HTTP_PROVIDERS,
        ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/event', name: 'EventDetail', component: EventComponent }
    // { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent }
])
export class NavComponent {
    tooltipText: string = 'Team Members: Ethan Rowell, Nicholas Hays, Jacob Tillett, Edward Koval, Ben Pasero';

    ngOnInit(): void {
        $('.easterEgg').attr({
         'data-toggle': 'tooltip',
         'data-placement':'left',
         'title': this.tooltipText
        }).tooltip();
    }
}
