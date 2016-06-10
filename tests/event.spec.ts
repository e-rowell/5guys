//author: Edward Koval


///<reference path="../node_modules/angular2/src/http/http.d.ts"/>
//import {toBe} from '../node_modules/jasmine-core/lib';
import {RouteParams, Router, ROUTER_DIRECTIVES} from '../node_modules/angular2/router';
//import { Component, OnInit } from '../node_modules/angular2/core';
import { Http, Response } from '../node_modules/angular2/http';


import {IEvent} from '../app/components/event/event';
import { EventComponent } from '../app/components/event/event.component';
import { EventListComponent } from '../app/components/event-list/event-list.component';
import {EventsService} from '../app/services/event.service';
import {AppComponent} from '../app/components/app/app.component';
import {Observable} from "rxjs/Rx";
import {InjectableMetadata} from "angular2/core";


/*
 a series of unit tests that confirm the events object is instantiated.
 @author Edward Koval
 */

describe('make event', () => {
    let app:AppComponent;
    let testEvent:IEvent;
    let http:Http;
    let router:Router;
    let routeParams:RouteParams;
    let event:EventComponent;
    var service:EventsService;
    var eventList:EventListComponent;
    //eventList = new EventListComponent(service, router, routeParams);

    

    testEvent = {eventID: 2,
    eventName: 'testEvent',
    eventDescription: 'test',
    scoringGuidelines: 'scoring',
    eventStart: 'start',
    eventEnd: 'end',
    eventRequirements: ['to have requirements', 'akffjk'],
    eventStatus: 'true'}

    /*
     tests to make sure the event is not null.
     @author Edward Koval
     */
    it('make sure event is not null', () => {
        expect(testEvent).not.toBe(undefined);
    });

    /*
     tests to make sure the eventId is correct.
     @author Edward Koval
     */
    it('test eventId', () => {
        expect(testEvent.eventID).toBe(2);
    })

    /*
     tests to make sure the eventName is correct.
     @author Edward Koval
     */
    it('testing eventName', () => {
        expect(testEvent.eventName).toBe("testEvent");
    })

    /*
     tests to make sure the eventDescription is correct.
     @author Edward Koval
     */
    it('testing eventDescription', () => {
        expect(testEvent.eventDescription).toBe("test");
    })

    /*
     tests to make sure the scoringGuidelines is correct.
     @author Edward Koval
     */
    it('testing scoringGuidelines', () => {
        expect(testEvent.scoringGuidelines).toBe("scoring");
    })

    /*
     tests to make sure the eventStart is correct.
     @author Edward Koval
     */
    it('testing eventStart', () => {
        expect(testEvent.eventStart).toBe("start");
    })

    /*
     tests to make sure the eventEnd is correct.
     @author Edward Koval
     */
    it('testing eventEnd', () => {
        expect(testEvent.eventEnd).toBe("end");
    })

    /*
     tests to make sure the eventRequirements is the correct length.
     @author Edward Koval
     */
    it('testing eventRequirements length', () => {
        expect(testEvent.eventRequirements.length).toBe(2);
    })

    /*
     tests to make sure the eventRequirements is correct.
     @author Edward Koval
     */
    it('testing eventRequirements', () => {
        expect(testEvent.eventRequirements[0]).toBe('to have requirements');
    })

    /*
     tests to make sure the eventStatus is correct.
     @author Edward Koval
     */
    it('testing eventStatus', () => {
        expect(testEvent.eventStatus).toBe("true");
    })

    /*
     tests to make sure the event service is created.
     @author Edward Koval
     */
    describe('make service', () => {

        // var EventsService = require('../app/services/event.service');
        //
        // var eventService = new EventsService();

        /*
         tests to make sure the event service is not instantiated.
         @author Edward Koval
         */
        it('make service object', () => {
            expect(service).toBe(undefined)
        })

        /*
         tests to make sure the event service is not null.
         @author Edward Koval
         */
        it('service null check', () => {
            expect(service).not.toBe(null)
        })

    });
    

    //var events:Observable<IEvent[]> = service.getEvents();


    // describe('EventListComponent tests', () => {
    //     //eventList = {errorMessage:"Has an Error", events:[testEvent], userType:'Patron'};
    //
    //     it ('make sure component is initailized', () => {
    //         expect(eventList).toBeDefined();
    //     })
    // });



    //event = new EventComponent(service, Router, RouteParams)
});

