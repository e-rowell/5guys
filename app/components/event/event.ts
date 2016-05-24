export interface IEvent {
    eventID: number;
    eventName: string;
    eventDescription: string;
    scoringGuidelines: string;
    eventStart: string;
    eventEnd: string;
    eventRequirements: string[];
    eventStatus: string;
}