//author: Edward Koval
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
            describe('make event', () => {
                let app;
                let testEvent;
                let http;
                let router;
                let routeParams;
                let event;
                var service;
                var eventList;
                //eventList = new EventListComponent(service, router, routeParams);
                testEvent = { eventID: 2,
                    eventName: 'testEvent',
                    eventDescription: 'test',
                    scoringGuidelines: 'scoring',
                    eventStart: 'start',
                    eventEnd: 'end',
                    eventRequirements: ['to have requirements', 'akffjk'],
                    eventStatus: 'true' };
                it('make sure event is not null', () => {
                    expect(testEvent).not.toBe(undefined);
                });
                it('test eventId', () => {
                    expect(testEvent.eventID).toBe(2);
                });
                it('testing eventName', () => {
                    expect(testEvent.eventName).toBe("testEvent");
                });
                it('testing eventDescription', () => {
                    expect(testEvent.eventDescription).toBe("test");
                });
                it('testing scoringGuidelines', () => {
                    expect(testEvent.scoringGuidelines).toBe("scoring");
                });
                it('testing eventStart', () => {
                    expect(testEvent.eventStart).toBe("start");
                });
                it('testing eventEnd', () => {
                    expect(testEvent.eventEnd).toBe("end");
                });
                it('testing eventRequirements length', () => {
                    expect(testEvent.eventRequirements.length).toBe(2);
                });
                it('testing eventRequirements', () => {
                    expect(testEvent.eventRequirements[0]).toBe('to have requirements');
                });
                it('testing eventStatus', () => {
                    expect(testEvent.eventStatus).toBe("true");
                });
                describe('make service', () => {
                    // var EventsService = require('../app/services/event.service');
                    //
                    // var eventService = new EventsService();
                    it('make service object', () => {
                        expect(service).toBe(undefined);
                    });
                    it('service null check', () => {
                        expect(service).not.toBe(null);
                    });
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
        }
    }
});
//# sourceMappingURL=event.spec.js.map