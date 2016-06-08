System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
            describe('make event', () => {
                let testEvent;
                let event;
                let service;
                let http;
                //event = new EventComponent();
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
                    it('make service object', () => {
                        expect(service).toBe(undefined);
                    });
                });
                //event = new EventComponent(service, Router, RouteParams)
            });
        }
    }
});
//# sourceMappingURL=event.spec.js.map