import { Component } from 'angular2/core';

@Component({
    templateUrl: 'app/components/home/home.component.html',
    styleUrls: ['app/components/home/home.component.css']
})
/**
 * Displays the home page.
 * @author Ethan Rowell
 */
export class HomeComponent {

    /**
     * Title of the page. 
     */
    public _pageTitle: string = 'Home';

    /**
     * News highlights. 
     */
    public _newsArr: string[] = [
        'North Tacoma resident takes reins of Gig Harbor Library',
        'New manager of library collections',
        'Calling all makers! Apply to be an exhibitor for MakerFest',
        'April is Poetry Month at the Library'
    ];

    /**
     * Top row of quicklinks.
     */
    public quicklinksTop: any[] = [
        { imgName: 'Get a Free Library Card', imgLoc: './app/assets/images/quicklinks/getacard.png' },
        { imgName: 'Homework Help', imgLoc: './app/assets/images/quicklinks/homework.png' },
        { imgName: 'Online Classes', imgLoc: './app/assets/images/quicklinks/get-smart.png' },
        { imgName: 'Locations/Hours', imgLoc: './app/assets/images/quicklinks/map.png' }
    ];

    /**
     * Middle row of quicklinks.
     */
    public quicklinksMid: any[] = [
        { imgName: 'Download E-Books', imgLoc: './app/assets/images/quicklinks/ebooks.png' },
        { imgName: 'Download Audiobooks', imgLoc: './app/assets/images/quicklinks/audiobooks.png' },
        { imgName: 'Download Music', imgLoc: './app/assets/images/quicklinks/music.png' },
        { imgName: 'Download Movies', imgLoc: './app/assets/images/quicklinks/movies.png' }
    ];

    /**
     * Bottom row of quicklinks.
     */
    public quicklinksBot: any[] = [
        { imgName: 'Download Magazines', imgLoc: './app/assets/images/quicklinks/magazines.png' },
        { imgName: 'E-Sources', imgLoc: './app/assets/images/quicklinks/esources.png' },
        { imgName: 'Job + Business Center', imgLoc: './app/assets/images/quicklinks/jbc.png' },
        { imgName: 'Join an Email List', imgLoc: './app/assets/images/quicklinks/email.png' }
    ];
}