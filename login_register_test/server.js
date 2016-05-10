const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

var db

app.use(bodyParser.urlencoded({extended: true}))
// puts data from form into req.body


MongoClient.connect('mongodb://test:test@ds013202.mlab.com:13202/test1', function (err, database) {
      //start the server
    if (err) return console.log(err)
    db = database

    //do this in here so that the app only starts if we have a db connection
    app.listen(3000, () => {
        console.log('listening on 3000')
    })
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/success', (req, res) => {
    res.sendFile(__dirname + '/success.html');
})

/*check if the username and password are in the db
This is a shit way to do this. how do we know the user is
"logged in" when they are on another page?*/
app.post('/login', (req, res) => {
    var result = false;

    db.collection('users').find().toArray((err, array) => {
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
})

app.get('/registration', (req, res) => {
    res.sendFile(__dirname + '/registration.html');
})

app.post('/register', (req,res) => {
    db.collection('users').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('New user registered');
        res.redirect('/');
    })
})


