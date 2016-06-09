const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

var db;
var username = false;
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

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/dev_html'));
app.use(express.static('uploads'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// puts data from form into req.body

/*app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
 });*/

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


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

/*Better way to login*/
app.post('/login', function (req, res) {

    db.collection('users').findOne({
        "username": req.body.username, "password": req.body.password
    }, function (err, result) {
        if (result) { //what if user is already logged in TODO
            username = req.body.username;
            res.status(200).send("login succeded")
        }
        else
            res.status(500).send("login failed");
    })
});

app.get('/whoami', (req, res) => {
    res.send(username);
});

app.get('/logout', (req, res) => {
    //TODO error when not logged in?
    username = false;
    res.status(200).send("logged out");
});

app.post('/getEntry', (req, res) => {
    //TODO why the fuck is this an array
    db.collection('entries').findOne({
        "patronID": req.body.patronID,
        "eventName": req.body.eventName
    }, (err, result) => {
        if (err) return console.log(err);
        res.send(result);
    })
});

app.post('/getAllEntries', (req, res) => {
    db.collection('entries').find({
        "eventName": req.body.eventName
    }, (err, result) => {
        res.send(result);
    })
});


//assign an event to a judge
app.post('/assignJudges', (req, res) => {
    //place judgeName and eventName in the judge collection
    db.collection('judges').save(req.body, function (err, result) {
        if (err) return console.log(err);

        console.log('assigned event to judge');
    });
});

/*app.get('/getJudges', (req, res) => {
 res.send({"Judy", "Dredd", "Mathis", "Alex"});
 });*/

app.post('/getUnassignedEntries', bodyParser.json(), (req, res) => {
    // TODO get entries in entries collection whose assignedJudge is empty
});

/*// TODO remove in place of POST route below
 app.get('/getJudgesEntries', (req, res) => {
 db.collection('judges').find().toArray((err, result) => {
 if (err) return console.log(err);
 res.send(result[0].assignedEntries);
 })
 });*/


app.post('/getJudgesEntries', bodyParser.json(), (req, res) => {
    // TODO change: query entries collection for entries that match the judge name
    console.log(req.body);
    db.collection('entries').find({
        $and: [ { "assignedJudge": req.body.judgeName },
                { "eventName": req.body.eventName } ]


    }).toArray((err, result) => {
        if (err) return console.log(err.message);
        else {
            console.log(result);
            res.send(result);
        }
    });
});


//TODO have this add the score to the user documents also patron id
// add patron to user id and entry
app.post('/submitScoring', bodyParser.json(), (req, res) => {
    db.collection('judges').update(
        {judgeName: req.body.judgeName},
        {$set: {assignedEntries: req.body.entries}},
        (err, result) => {
            if (err) console.log(err.message);
            res.send(result);
        }
    );
});


app.post("/submitEntry", multer({
    storage: storage
}).array("uploads[]", 12), function (req, res) {
    db.collection('entries').save({
            file: req.files[0],
            patronID: req.body.patronID,
            artworkTitle: req.body.artworkTitle,
            eventName: req.body.eventName,
            scoring: 0,                 // set initial scoring
            assignedJudge: "Judy",      // testing purposes
            ageGroup: "Ages: 10-16"     // 
        },   
        (err, result) => {
            if (err) return console.log(err)

        });
    console.log(req.body);
    res.send(req.files); // send back artwork path
});


app.post("/withdrawEntry", (req, res) => {
    // TODO post event name to withdraw from 
});


app.post('/createEvent', (req, res) => {
    db.collection('events').save(req.body, function (err, result) {
        if (err) return console.log(err);

        console.log('New event created');
        res.redirect('/'); //TODO get rid of this?
    })
});

app.get('/getAllEvents', (req, res) => {
    db.collection('events').find().toArray((err, result) => {
        if (err) return console.log(err);
        res.send(result);
    })
});


app.post('/register', function (req, res) {
    db.collection('users').save(req.body, function (err, result) {
        if (err) return console.log(err);

        console.log('New user registered');
        res.redirect('/');
    })
});

// 404 catch - needs to be at the bottom
app.all('*', (req, res) => {
    console.log(`[TRACE] Server 404 request: ${req.originalUrl}`);
    res.status(200).sendFile(__dirname + '/index.html');
});