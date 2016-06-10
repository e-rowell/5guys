import { Component } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';

import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { RouteConfig } from 'angular2/router';

import { NavComponent } from '../shared/nav/nav.component';
import { HomeComponent } from '../home/home.component';
import { EventComponent } from '../event/event.component';
import { EventListComponent } from '../event-list/event-list.component';

@Component({
    selector: 'ccl-app',
    template:`<nav-comp></nav-comp>`,
    styles: ['app/components/app.component.css', 'app/assets/site.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, NavComponent],
    providers: [HTTP_PROVIDERS]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/events/:currentUser', name: 'Events', component: EventListComponent },
    { path: '/events/:eventName/:currentUser', name: 'EventDetail', component: EventComponent }
])
/**
 * The main App Component.
 * @author Ethan Rowell
 */
export class AppComponent {
    pageTitle: string = 'Clark Country Library';
}
 