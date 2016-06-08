///<reference path="../node_modules/angular2/src/http/http.d.ts"/>
import {RouteParams, Router, Router} from 'angular2/router';
import { Http, Response } from 'angular2/http';


import {IEvent} from '../app/components/event/event';
import { EventComponent } from '../app/components/event/event.component';
import { EventListComponent } from '../app/components/event-list/event-list.component';
import {EventsService} from '../app/services/event.service';

describe('make event', () => {
    let testEvent:IEvent;
    let event:EventComponent;
    let service:EventsService;
    let http:Http;

    //event = new EventComponent();

    testEvent = {eventID: 2,
    eventName: 'testEvent',
    eventDescription: 'test',
    scoringGuidelines: 'scoring',
    eventStart: 'start',
    eventEnd: 'end',
    eventRequirements: ['to have requirements', 'akffjk'],
    eventStatus: 'true'}

    it('make sure event is not null', () => {
        expect(testEvent).not.toBe(undefined);
    });

    it('test eventId', () => {
        expect(testEvent.eventID).toBe(2);
    })

    it('testing eventName', () => {
        expect(testEvent.eventName).toBe("testEvent");
    })

    it('testing eventDescription', () => {
        expect(testEvent.eventDescription).toBe("test");
    })

    it('testing scoringGuidelines', () => {
        expect(testEvent.scoringGuidelines).toBe("scoring");
    })

    it('testing eventStart', () => {
        expect(testEvent.eventStart).toBe("start");
    })

    it('testing eventEnd', () => {
        expect(testEvent.eventEnd).toBe("end");
    })

    it('testing eventRequirements length', () => {
        expect(testEvent.eventRequirements.length).toBe(2);
    })

    it('testing eventRequirements', () => {
        expect(testEvent.eventRequirements[0]).toBe('to have requirements');
    })

    it('testing eventStatus', () => {
        expect(testEvent.eventStatus).toBe("true");
    })

    describe('make service', () => {

        it('make service object', () => {
            expect(service).toBe(undefined)
        })
        
    });



    //event = new EventComponent(service, Router, RouteParams)
});

