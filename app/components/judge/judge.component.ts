import { Component, OnInit } from 'angular2/core';

import { IEntry } from '../shared/interfaces/entry';
import { EntriesService } from '../../services/entries.service';

@Component({
    selector: 'judge',
    templateUrl: 'app/components/judge/judge.component.html',
    styleUrls: ['app/components/judge/judge.component.css'],
    providers: [EntriesService]
})
/**
 * Component for judging entries.
 * @author Ethan Rowell
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

    /**
     * On change of scoring, update the local observable entry's scoring property.
     * @param patronID The patron ID of the entry.
     * @param score The new score to update.
     */
    onChange(patronID: number, score: number) {
        this.entries.find( entry => entry.patronID == patronID).score = score;
    }

    /**
     * Get the entries that belong to the judge.
     * @param judgeName The whose entries are to be retrieved.
     * @param eventName The event name that the entries are for.
     */
    getJudgeEntries(judgeName: string, eventName: string) {
        this._entriesService.getJudgeEntries(judgeName, eventName).subscribe(
            entries => this.entries = entries,
            error => this.errorMessage = <any>error);
    }

    /**
     * Update scoring for judge's assigned entries.
     */
    submitScoring() {
        this._entriesService.submitScoring("Judy", this.entries);
    }
}