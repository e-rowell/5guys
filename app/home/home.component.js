System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this._pageTitle = 'Home';
                    this._newsArr = [
                        'North Tacoma resident takes reins of Gig Harbor Library',
                        'New manager of library collections',
                        'Calling all makers! Apply to be an exhibitor for MakerFest',
                        'April is Poetry Month at the Library'
                    ];
                    this.quicklinksTop = [
                        { imgName: 'Get a Free Library Card', imgLoc: './app/assets/images/quicklinks/getacard.png' },
                        { imgName: 'Homework Help', imgLoc: './app/assets/images/quicklinks/homework.png' },
                        { imgName: 'Online Classes', imgLoc: './app/assets/images/quicklinks/get-smart.png' },
                        { imgName: 'Locations/Hours', imgLoc: './app/assets/images/quicklinks/map.png' }
                    ];
                    this.quicklinksMid = [
                        { imgName: 'Download E-Books', imgLoc: './app/assets/images/quicklinks/ebooks.png' },
                        { imgName: 'Download Audiobooks', imgLoc: './app/assets/images/quicklinks/audiobooks.png' },
                        { imgName: 'Download Music', imgLoc: './app/assets/images/quicklinks/music.png' },
                        { imgName: 'Download Movies', imgLoc: './app/assets/images/quicklinks/movies.png' }
                    ];
                    this.quicklinksBot = [
                        { imgName: 'Download Magazines', imgLoc: './app/assets/images/quicklinks/magazines.png' },
                        { imgName: 'E-Sources', imgLoc: './app/assets/images/quicklinks/esources.png' },
                        { imgName: 'Job + Business Center', imgLoc: './app/assets/images/quicklinks/jbc.png' },
                        { imgName: 'Join an Email List', imgLoc: './app/assets/images/quicklinks/email.png' }
                    ];
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/home/home.component.html',
                        styleUrls: ['app/home/home.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map