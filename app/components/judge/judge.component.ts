import { Component, OnInit } from 'angular2/core';
import {Observable} from "rxjs/Observable";

import { IEntry } from '../shared/interfaces/entry';
import { EntriesService } from '../../services/entries.service';
/*import MaskedInput from '@msafi.angular2-text-mask';*/

@Component({
    selector: 'judge',
    templateUrl: 'app/components/judge/judge.component.html',
    styleUrls: ['app/components/judge/judge.component.css'],
    providers: [EntriesService]/*,
    directives: [MaskedInput]*/
})
/**
 * Component for judging entries.
 */
export class JudgeComponent implements OnInit {

    /**
     * Array of assigned entries.
     */
    entries: IEntry[];

    /**
     * Error message from failed HTTP request.
     */
    errorMessage: string;

    /**
     * Constructor.
     * @param _entriesService Instantiates and assigns private EntriesService object.
     */
    constructor(private _entriesService: EntriesService) { }

    /**
     * Executes on page load after data bound objects have been initialized.
     */
    ngOnInit() {
        if (!this.entries) {
            // this.getEntries();
            this.getJudgeEntries("Judy", "Coloring Contest");
        }

        $('.scoring').inputmask("integer", {
            min: 0,
            max: 10
        })
    }

    // update score for the patron
    onChange(patronID: number, score: number) {
        this.entries.find( entry => entry.patronID == patronID).score = score;
    }

    /*getEntries() {
        this._entriesService.getEntries().subscribe(
            entries => this.entries = entries,
            error => this.errorMessage = <any>error);
    }*/

    getJudgeEntries(judgeName: string, eventName: string) {
        this._entriesService.getJudgeEntries(judgeName, eventName).subscribe(
            entries => this.entries = entries,
            error => this.errorMessage = <any>error);
    }

    // TODO submite this.entries.assignedEntries back to server to update scoring
    submitScoring() {
        let message: Observable<any> = this._entriesService.submitScoring("Judy", this.entries);
        console.log(message);
    }

}