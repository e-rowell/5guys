var expect = require("chai").expect;
var request = require("request");


describe("Clark County Library contest app", function() {

  describe("Home Page", function() {
    var url = "http://localhost:3000/";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });

    });


  }); //end homepage

  //login
  describe("login page", function() {
    var url = "http://localhost:3000/login";
    // var db = new Connection;
    // var bob = new User('bob');

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    // beforeEach(function(done) {
    //   db.clear(function(error) {
    //     if(error) return done(error);
    //     db.save([bob],done);
    //   });
    // });
    //
    // describe("#findOne()", function() {
    //   it("should find user", function(done) {
    //     db.findOne({type: 'User'}, function(error, response) {
    //       if(error) return done(error);
    //       if(response.equal('bob')) {
    //         expect(response.statusCode).to.equal(200);
    //       } else {
    //         expect(response.statusCode).to.equal(500);
    //       }
    //
    //     })
    //   })
    // })
  });

  describe("whoami page", function() {
    var url = "http://localhost:3000/whoami";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("logout", function() {
    var url = "http://localhost:3000/logout";

    it("returns status 200", function(done) {
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

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("getAllEntries page", function() {
    var url = "http://localhost:3000/getAllEntries";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("assign judge page", function() {
    var url = "http://localhost:3000/assignJudges";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("get judge entries page", function() {
    var url = "http://localhost:3000/getJudgesEntries";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("submitScoring page", function() {
    var url = "http://localhost:3000/submitScoring";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("submit entry page", function() {
    var url = "http://localhost:3000/submitEntry";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("withdraw page", function() {
    var url = "http://localhost:3000/withdraw";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("create event page", function() {
    var url = "http://localhost:3000/createEvent";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("get all events page", function() {
    var url = "http://localhost:3000/getAllEvents";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });



  describe("registering", function() {
    var url = "http://localhost:3000/register";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    // it("redirects to /", function(done) {
    //   request(url, function(error, response, body) {
    //     expect(response.redirect).to.equal('/');
    //     done();
    //   });
    // });

  });

});
