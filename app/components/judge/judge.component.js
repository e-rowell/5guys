System.register(['angular2/core', '../../services/entries.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, entries_service_1;
    var JudgeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (entries_service_1_1) {
                entries_service_1 = entries_service_1_1;
            }],
        execute: function() {
            let JudgeComponent = class JudgeComponent {
                /**
                 * Constructor.
                 * @param _entriesService Instantiates and assigns private EntriesService object.
                 */
                constructor(_entriesService) {
                    this._entriesService = _entriesService;
                }
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
                    });
                }
                /**
                 * On change of scoring, update the local observable entry's scoring property.
                 * @param patronID The patron ID of the entry.
                 * @param score The new score to update.
                 */
                onChange(patronID, score) {
                    this.entries.find(entry => entry.patronID == patronID).score = score;
                }
                /**
                 * Get the entries that belong to the judge.
                 * @param judgeName The whose entries are to be retrieved.
                 * @param eventName The event name that the entries are for.
                 */
                getJudgeEntries(judgeName, eventName) {
                    this._entriesService.getJudgeEntries(judgeName, eventName).subscribe(entries => this.entries = entries, error => this.errorMessage = error);
                }
                /**
                 * Update scoring for judge's assigned entries.
                 */
                submitScoring() {
                    this._entriesService.submitScoring("Judy", this.entries);
                }
            };
            JudgeComponent = __decorate([
                core_1.Component({
                    selector: 'judge',
                    templateUrl: 'app/components/judge/judge.component.html',
                    styleUrls: ['app/components/judge/judge.component.css'],
                    providers: [entries_service_1.EntriesService]
                }), 
                __metadata('design:paramtypes', [entries_service_1.EntriesService])
            ], JudgeComponent);
            exports_1("JudgeComponent", JudgeComponent);
        }
    }
});
//# sourceMappingURL=judge.component.js.map