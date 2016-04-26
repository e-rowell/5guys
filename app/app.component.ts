import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './products/product-detail.component';

@Component({
    selector: 'ccl-app',
    templateUrl: 'app/shared/nav.component.html',
    styleUrls: ['app/shared/nav.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService,
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/products', name: 'Products', component: ProductListComponent },
    { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent }
])
export class AppComponent {
    pageTitle: string = 'Clark Country Library';
}
