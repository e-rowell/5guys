import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, RouteConfig } from 'angular2/router';


// Our main component
import { AppComponent } from './components/app/app.component';

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, RouteConfig]);
