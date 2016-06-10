import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, RouteConfig } from 'angular2/router';

// Our main component
import { AppComponent } from '../app/components/app/app.component';

/**
 * Bootstraps the app component.
 * @author Ethan Rowell
 */
bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, RouteConfig]);
