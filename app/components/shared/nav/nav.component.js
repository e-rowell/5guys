System.register(['angular2/core', 'angular2/router', "angular2/common"], function(exports_1, context_1) {
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
    var core_1, router_1, common_1;
    var NavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            let NavComponent_1;
            let NavComponent = NavComponent_1 = class NavComponent {
                constructor() {
                    this.tooltipText = 'Team Members: Ethan Rowell, Nicholas Hays, Jacob Tillett, Edward Koval, Ben Pasero';
                    this.userTypes = ["Patron", "Librarian", "Judge"];
                    this.currentUserType = "Patron";
                    this.selectedUserType = "Patron";
                    this.currentUser = {};
                    this.currentUser.patronID = 123456;
                    this.currentUser.username = "Jim";
                    this.currentUser.userType = "Judge";
                }
                /**
                 * On change event.
                 * @param newValue The new value to update.
                 */
                onChange(newValue) {
                    this.selectedUserType = newValue;
                }
                /**
                 * Sets the current user's information from the Login inputs.
                 */
                setUser() {
                    this.currentUser.patronID = $('#patronID').val();
                    this.currentUser.username = $('#username').val();
                    this.currentUser.userType = $('#userType').val();
                }
                /**
                 * Executes on page load after data bound objects have been initialized.
                 */
                ngOnInit() {
                    $('.easterEgg').attr({
                        'data-toggle': 'tooltip',
                        'data-placement': 'top',
                        'title': this.tooltipText
                    }).tooltip();
                    // $('#patronID').inputmask('number')
                }
            };
            NavComponent = NavComponent_1 = __decorate([
                core_1.Component({
                    selector: 'nav-comp',
                    templateUrl: 'app/components/shared/nav/nav.component.html',
                    styleUrls: ['app/components/shared/nav/nav.component.css'],
                    directives: [router_1.ROUTER_DIRECTIVES, NavComponent, common_1.NgFor],
                    providers: [router_1.ROUTER_PROVIDERS]
                }), 
                __metadata('design:paramtypes', [])
            ], NavComponent);
            exports_1("NavComponent", NavComponent);
        }
    }
});
//# sourceMappingURL=nav.component.js.map