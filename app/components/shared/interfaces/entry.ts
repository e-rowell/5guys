/**
 * Interface for Entries
 * @author Ethan Rowell
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
     * The judge assigned to this entry.
     */
    assignedJudge: string;

    /**
     * File information.
     */
    file: {
        /**
         * Unmodified name of the file.
         */
        originalname: string,

        /**
         * Parent destination folder.
         */
        destination: string,

        /**
         * Name of the file.
         */
        filename: string,

        /**
         * Path to the submission.
         */
        path: string,

        /**
         * Size of the file.
         */
        size: number
    }
}