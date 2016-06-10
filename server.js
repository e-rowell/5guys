const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

//mongo client
var db;

//global username (not used at the moment)
var username = false;

//multer keeps the original filename and stores in uploads
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

var upload = multer({
    storage: storage
}).single('userEntry');

//directories we need access to
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/dev_html'));
app.use(express.static('uploads'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

/**
* Sets up the mongo client by connecting to the database at mlab. Prints
* error message if the database is down (not likely)
* @author Ben p
*/
MongoClient.connect('mongodb://test:test@ds013202.mlab.com:13202/test1', function (err, database) {
    //start the server
    if (err) return console.log(err);
    db = database;

    //do this in here so that the app only starts if we have a db connection
    app.listen(3000, function () {
        console.log('listening on 3000');
        // open('http://localhost:3000/');
    })
});

/**
* Returns the index when the "root" url is visited.
* @author Ben p
*/
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

/**
* Unimplemented server side log in method. Saves the current user in a
* var that other routes have access to. 
* @author Ben p
*/
app.post('/login', function (req, res) {

    db.collection('users').findOne({
        "username": req.body.username, "password": req.body.password
    }, function (err, result) {
        if (result) { //what if user is already logged in TODO
            username = req.body.username;
            res.status(200).send("login succeded")
        }
        else
            console.log(req.body.username)//res.status(500).send("login failed");
    })
});

/**
* Returns the username string. not used
* @author Ben p
*/
app.get('/whoami', (req, res) => {
    res.send(username);
});

/**
* Unused method to log a user out.
*/
app.get('/logout', (req, res) => {
    //TODO error when not logged in?
    username = false;
    res.status(200).send("logged out");
});

/**
* Returns a json entry based on a username and an even name.
* @author Ben p
*/
app.post('/getEntry', (req, res) => {
    db.collection('entries').findOne({
        "patronID": req.body.patronID,
        "eventName": req.body.eventName
    }, (err, result) => {
        if (err) return console.log(err);
        res.send(result);
    })
});

/**
* Returns all entries in an event.
* @param req contains an eventName
* @author Ben p
*/
app.post('/getAllEntries', (req, res) => {
    db.collection('entries').find({
        "eventName": req.body.eventName
    }, (err, result) => {
        res.send(result);
    })
});


//assign an event to a judge
/**
* Assigns an event to a judge in the database
* @param req contains a judgeName and eventName in its body
* @author Ben p
*/
app.post('/assignJudges', (req, res) => {
    //place judgeName and eventName in the judge collection
    db.collection('judges').save(req.body, function (err, result) {
        if (err) return console.log(err);

        console.log('assigned event to judge');
    });
});

/*
* Retrives unassigned entries. Not implemented yet
*/
app.post('/getUnassignedEntries', bodyParser.json(), (req, res) => {
    // TODO get entries in entries collection whose assignedJudge is empty
});

/**
* Gets entries assigned to a specific judge and event.
* @param req body contains assignedJudge and eventName
* @author Ethan R
*/
app.post('/getJudgesEntries', (req, res) => {
    // TODO change: query entries collection for entries that match the judge name
    db.collection('entries').find({
        $and: [ { "assignedJudge": req.body.judgeName },
                { "eventName": req.body.eventName } ]

    }).toArray((err, result) => {
        if (err) return console.log(err.message);
        else {
            res.send(result);
        }
    });
});

/**
* Submits a score to the database
* TODO have this add the score to the user documents also patron id
* add patron to user id and entry
* @param req body contains judge name and entries
* @author Ethan R 
*/
app.post('/submitScoring', (req, res) => {
    console.log("in submit scoring");

    for (var entry of req.entries) {
        db.collection('entries').update(
            { judgeName: req.body.judgeName, patronID: entry.patronID },
            { scoring: entry.scoring },
        (err, result) =>  {
            if (err) console.log(err.message);
            res.send(result);
        });
    }
});

/**
* Submits an entry file. Uploads a file to the server and commits file
* information to the database.
* @param req contains file info for multer
* @author Ben P
* @author Ethan R
*/
app.post("/submitEntry", multer({
    storage: storage
}).array("uploads[]", 12), function (req, res) {
    db.collection('entries').save({
            file: req.files[0],
            patronID: req.body.patronID,
            artworkTitle: req.body.artworkTitle,
            eventName: req.body.eventName,
            scoring: 0,                 // set initial scoring
            assignedJudge: "Judy",      // testing purposes - assigning judges not implemented.
            ageGroup: "Ages: 10-16"     // testing purposes - age groups not received from event
        },   
        (err, result) => {
            if (err) return console.log(err)

        });
    console.log(req.body);
    res.send(req.files); // send back artwork path
});


/**
* Withdraw a previous entry (not implemented)
* @author Ethan R
* @author Ben P
*/
app.post("/withdrawEntry", (req, res) => {
    console.log("In withdrawEntry" + req.body);

    // TODO post event name to withdraw from 
    //withdraw from entries based on patronID & eventName
    db.collection('entries').deleteOne({
            patronID: req.body.patronID,
            eventName: req.body.eventName
        },
        (err, result) => {
            if (err) return console.log(err)
            console.log(result);
        });
});


/**
* Creates a new event in the database
* @param req contains information about the event
* @author Ben p
*/
app.post('/createEvent', (req, res) => {
    db.collection('events').save(req.body, function (err, result) {
        if (err) return console.log(err);

        console.log('New event created');
    })
});

/**
* Returns all events from the database
* @author Ethan R
*/
app.get('/getAllEvents', (req, res) => {
    db.collection('events').find().toArray((err, result) => {
        if (err) return console.log(err);
        res.send(result);
    })
});

/**
* Adds a new user to the database
* @param req contains user json
* @author Ben P
*/
app.post('/register', function (req, res) {
    db.collection('users').save(req.body, function (err, result) {
        if (err) return console.log(err);

        console.log('New user registered');
        res.redirect('/');
    })
});

/** 
* 404 catch - needs to be at the bottom
* @author Ethan R
*/
app.all('*', (req, res) => {
    console.log(`[TRACE] Server 404 request: ${req.originalUrl}`);
    res.status(200).sendFile(__dirname + '/index.html');
});
