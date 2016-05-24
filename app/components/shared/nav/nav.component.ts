import { Component, OnInit } from 'angular2/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router';
/*import { AuthService } from '../../../services/auth.service';*/

@Component({
    selector: 'nav-comp',
    templateUrl: 'app/components/shared/nav/nav.component.html',
    styleUrls: ['app/components/shared/nav/nav.component.css'],
    directives: [ROUTER_DIRECTIVES, NavComponent],
    providers: [ROUTER_PROVIDERS]
})
export class NavComponent implements OnInit{
    tooltipText: string = 'Team Members: Ethan Rowell, Nicholas Hays, Jacob Tillett, Edward Koval, Ben Pasero';

    ngOnInit(): void {
        $('.easterEgg').attr({
         'data-toggle': 'tooltip',
         'data-placement':'top',
         'title': this.tooltipText
        }).tooltip();
    }
}
