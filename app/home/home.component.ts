import { Component } from 'angular2/core';

@Component({
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css']
})
export class HomeComponent {
    public _pageTitle: string = 'Home';
    public _newsArr: string[] = [
        'North Tacoma resident takes reins of Gig Harbor Library',
        'New manager of library collections',
        'Calling all makers! Apply to be an exhibitor for MakrerFest',
        'April is Poetry Month at the Library'
    ];
    private _quicklinksTop: [
        { imgName: 'Get a Free Library Card', imgLoc: './app/assets/images/quicklinks/getacard.png' },
        { imgName: 'Homework Help', imgLoc: './app/assets/images/quicklinks/getacard.png' },
        { imgName: 'Online Classes', imgLoc: './app/assets/images/quicklinks/getacard.png' },
        { imgName: 'Locations/Hours', imgLoc: './app/assets/images/quicklinks/getacard.png' }
    ];
    private _quicklinksMid: [
        { imgName: 'Download E-Books', imgLoc: './app/assets/images/quicklinks/getacard.png' },
        { imgName: 'Download Audiobooks', imgLoc: './app/assets/images/quicklinks/getacard.png' },
        { imgName: 'Download Music', imgLoc: './app/assets/images/quicklinks/getacard.png' },
        { imgName: 'Download Movies', imgLoc: './app/assets/images/quicklinks/getacard.png' }
    ];
    private _quicklinksBot: [
        { imgName: 'Download Magazines', imgLoc: './app/assets/images/quicklinks/getacard.png' },
        { imgName: 'E-Sources', imgLoc: './app/assets/images/quicklinks/getacard.png' },
        { imgName: 'Job + Business Center', imgLoc: './app/assets/images/quicklinks/getacard.png' },
        { imgName: 'Join an Email List', imgLoc: './app/assets/images/quicklinks/getacard.png' }
    ];
    public quicklinksArray: any[] = [ this._quicklinksTop, this._quicklinksMid, this._quicklinksBot ];
}
