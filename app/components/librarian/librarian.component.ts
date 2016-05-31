import { Component } from 'angular2/core';

import { EntriesService } from '../../services/entries.service';

@Component({
    selector: 'librarian',
    templateUrl: 'app/components/librarian/librarian.component.html',
    styleUrls: ['app/components/librarian/librarian.component.css']
})
export class LibrarianComponent {
    
    
    constructor (private _entriesService: EntriesService) { }
    
    
    
}