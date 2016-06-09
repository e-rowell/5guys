var expect = require("chai").expect;
var request = require("request");


/*
  a test that tries to connect to the homepage of the application.

  @author Jacob Tillett
*/
describe("Clark County Library contest app", function() {

  describe("Home Page", function() {
    var url = "http://localhost:3000/";

    it("connected to the homepage", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });

    });
  });

  /*
    a test to that tries to connect to the login page
    @author Jacob Tillett
  */
  describe("login page", function() {
    var url = "http://localhost:3000/login";


    it("connected to the login page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });


  /*
    tests the whoami page.
    @author Jacob Tillett
  */
  describe("whoami page", function() {
    var url = "http://localhost:3000/whoami";

    it("connected to the whoami page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  /*
    a test that tries to connect to the logout page and checks
    that it sent "logged out"
    @author Jacob Tillett
  */
  describe("logout", function() {
    var url = "http://localhost:3000/logout";

    it("connected to logout page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("sends logged out", function(done) {
      request(url, function(error, responce, body) {
        expect(body).to.equal("logged out");
        done();
      });
    });
  });

  /*
    a test that tries and connects to the getEntry page
    @author Jacob Tillett
  */
  describe("getEntry page", function() {
    var url = "http://localhost:3000/getEntry";

    it("connected to the get entry page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  /*
    a test that tries and connects to the getAllEntries page
    @author Jacob Tillett
  */
  describe("getAllEntries page", function() {
    var url = "http://localhost:3000/getAllEntries";

    it("connected to the get all entries page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  /*
    tests the assign judge page
    @author Jacob Tillett
  */
  describe("assign judge page", function() {
    var url = "http://localhost:3000/assignJudges";

    it("connected to the assign judge page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  /*
    a test that tries to connect to the getUnassignedEntries page
    @author Jacob Tillett
  */
  describe("get unassigned entries", function() {
    var url = "http://localhost:3000/getUnassignedEntries";

    it("connected to the unassigned entries page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  /*
    a test  that tries to connect to the judge entries page
    @author Jacob Tillett
  */
  describe("get judge entries page", function() {
    var url = "http://localhost:3000/getJudgesEntries";

    it("connected to the judge entries page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  /*
    a test that tests the submitScoring page
    @author Jacob Tillett
  */
  describe("submitScoring page", function() {
    var url = "http://localhost:3000/submitScoring";

    it("connected to the submit scoring page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  /*
     tests the submit entry page
     @author Jacob Tillett
  */
  describe("submit entry page", function() {
    var url = "http://localhost:3000/submitEntry";

    it("connected to the entry page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  /*
    a test that tries to connect to the withdraw page
    @author Jacob Tillett
  */
  describe("withdraw page", function() {
    var url = "http://localhost:3000/withdraw";

    it("connected to the withdraw page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  /*
    a test that tests the create events page
    @author Jacob Tillett
  */
  describe("create event page", function() {
    var url = "http://localhost:3000/createEvent";

    it("connected to the create event page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  /*
    makes sure you can access the getAllEvents page
    @author Jacob Tillett
  */
  describe("get all events page", function() {
    var url = "http://localhost:3000/getAllEvents";

    it("connected to the get all events page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });


  /*
    tests the register page
    @author Jacob Tillett
  */
  describe("registering", function() {
    var url = "http://localhost:3000/register";

    it("connected to the register page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

});
