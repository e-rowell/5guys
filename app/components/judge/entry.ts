/**
 * Interface for Entries
 */
export interface IEntry {
    /**
     * Age group for the entry.
     */
    ageGroup: string;
    /**
     * Patron's username.
     */
    username: string;

    /**
     * Name of the event the entry is tied to.
     */
    eventName: string;

    /**
     * Patron's ID for anonymous identification.
     */
    patronID: number;

    /**
     * Title of the artwork.
     */
    artworkTitle: string;

    /**
     * Score assigned to the entry.
     */
    score: number;

    /**
     * File information.
     */
    file: {
        originalname: string,
        destination: string,
        filename: string,
        path: string,
        size: number
    }
}