/**
 * Interface for Events.
 * @author Ethan Rowell
 */
export interface IEvent {
    /**
     * Event's unique identifier.
     */
    eventID: number;

    /**
     * Event's name.
     */
    eventName: string;

    /**
     * Event's description.
     */
    eventDescription: string;

    /**
     * Guidelines for scoring.
     */
    scoringGuidelines: string;

    /**
     * Start date.
     */
    eventStart: string;

    /**
     * End date.
     */
    eventEnd: string;

    /**
     * Requirements for submitting to an event.
     */
    eventRequirements: string[];

    /**
     * Active or inactive status.
     */
    eventStatus: string;
}