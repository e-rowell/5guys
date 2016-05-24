const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

var db;
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
/*    filename: function (req, file, callback) {
        callback(null, file.fieldname);
    }*/
});

var upload = multer({storage: storage}).single('userEntry');

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/dev_html'));
app.use(express.static('uploads'));

app.use(bodyParser.urlencoded({extended: true}));
// puts data from form into req.body

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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

app.post("/upload", multer({dest: "./uploads/"}).array("uploads[]", 12), function (req, res) {
    res.send(req.files);
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

// 404 catch
app.all('*', (req, res) => {
    console.log(`[TRACE] Server 404 request: ${req.originalUrl}`);
    res.status(200).sendFile(__dirname + '/index.html');
});