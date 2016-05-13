import { Component } from 'angular2/core';

@Component({
    templateUrl: 'app/event/event.component.html',
    styleUrls: ['app/event/event.component.css']
})
export class EventComponent {
    eventName: string = 'Coloring Contest';
    eventDescription: string;
    eventRequirements: string;
    artworkTitle: string;
    fileName: string;
    hasSubmittedEntry: boolean = true;
    isLoggedIn: boolean; // check whether the user is logged in as input to the component.
    isJudge: boolean;
    isAdmin: boolean;
    
    
    submitEntry(): void {

    }
}