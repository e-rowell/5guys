import { Component, OnInit } from 'angular2/core';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { HomeComponent } from '../home/home.component';


@Component({
    selector: 'nav-comp',
    templateUrl: 'app/nav/nav.component.html',
    styleUrls: ['app/nav/nav.component.css'],
    directives: [ROUTER_DIRECTIVES, NavComponent],
    providers: [HTTP_PROVIDERS,
        ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true }
    // { path: '/products', name: 'Products', component: ProductListComponent },
    // { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent }
])
export class NavComponent {
    tooltipText: string = 'Team Members: Ethan Rowell,';
    
    ngOnInit(): void {
        $('.easterEgg').attr({
         'data-toggle': 'tooltip',
         'data-placement':'left',
         'title': this.tooltipText   
        }).tooltip();       
    }
}