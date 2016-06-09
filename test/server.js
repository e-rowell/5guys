var expect = require("chai").expect;
var request = require("request");



describe("Clark County Library contest app", function() {

  describe("Home Page", function() {
    var url = "http://localhost:3000/";

    it("connected to the homepage", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });

    });


  }); //end homepage

  //login
  describe("login page", function() {
    var url = "http://localhost:3000/login";


    it("connected to the login page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("whoami page", function() {
    var url = "http://localhost:3000/whoami";

    it("connected to the whoami page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

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

  describe("getEntry page", function() {
    var url = "http://localhost:3000/getEntry";

    it("connected to the get entry page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("getAllEntries page", function() {
    var url = "http://localhost:3000/getAllEntries";

    it("connected to the get all entries page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("assign judge page", function() {
    var url = "http://localhost:3000/assignJudges";

    it("connected to the assign judge page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("get unassigned entries", function() {
    var url = "http://localhost:3000/getUnassignedEntries";

    it("connected to the unassigned entries page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("get judge entries page", function() {
    var url = "http://localhost:3000/getJudgesEntries";

    it("connected to the judge entries page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("submitScoring page", function() {
    var url = "http://localhost:3000/submitScoring";

    it("connected to the submit scoring page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("submit entry page", function() {
    var url = "http://localhost:3000/submitEntry";

    it("connected to the entry page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("withdraw page", function() {
    var url = "http://localhost:3000/withdraw";

    it("connected to the withdraw page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("create event page", function() {
    var url = "http://localhost:3000/createEvent";

    it("connected to the create event page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("get all events page", function() {
    var url = "http://localhost:3000/getAllEvents";

    it("connected to the get all events page", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });



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
