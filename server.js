const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

var db;

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/node_modules'));

app.use(bodyParser.urlencoded({extended: true}));
// puts data from form into req.body


MongoClient.connect('mongodb://test:test@ds013202.mlab.com:13202/test1', function (err, database) {
    //start the server
    if (err) return console.log(err);
    db = database;

    //do this in here so that the app only starts if we have a db connection
    app.listen(3000, function () {
        console.log('listening on 3000')
    })
});


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/success', function (req, res) {
    res.sendFile(__dirname + '/success.html');
});

/*check if the username and password are in the db
 This is a shit way to do this. how do we know the user is
 "logged in" when they are on another page?*/
app.post('/login', function (req, res) {
    var result = false;

    db.collection('users').find().toArray(function (err, array) {
        for (var i = 0; i < array.length; i++) {
            if ((array[i].username == req.body.username)
                && (array[i].password == req.body.password)) {
                result = true;
            }
        }

        if (result)
            res.redirect('/success');
        else
            res.redirect('/');
    })
});

var eventsJson = require("./api/events/events.json");

app.get('/getAllEvents', (req, res) => {
    db.collection('events').find().toArray((err, result) => {
        if (err) return console.log(err);
      res.json(eventsJson);
    })
});

app.post('/getSingleEvent', (req, res) => {
    console.log(req.body);

    res.json(eventsJson.find(e => e.eventName === req.body.eventName));
});

app.get('/registration', function (req, res) {
    res.sendFile(__dirname + '/registration.html');
});

app.post('/register', function (req, res) {
    db.collection('users').save(req.body, function (err, result) {
        if (err) return console.log(err)

        console.log('New user registered');
        res.redirect('/');
    })
});


