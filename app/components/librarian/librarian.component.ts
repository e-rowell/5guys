import { Component } from 'angular2/core';

import { EntriesService } from '../../services/entries.service';

@Component({
    selector: 'librarian',
    templateUrl: 'app/components/librarian/librarian.component.html',
    styleUrls: ['app/components/librarian/librarian.component.css']
})
/**
 * Component for displaying the librarian view to assign entries.
 * @author Ethan Rowell
 */
export class LibrarianComponent {

    /**
     *
     * @param _entriesService
     */
    constructor (private _entriesService: EntriesService) { }
}