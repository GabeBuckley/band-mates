/* !TODO

    Routes:

    ## REF_DATA
    Genre
    Roles
    Services

    ## CRUD

    User
    Band
    Band Configuration
    Band Member
    Band Member Role




    Site information

    ## User Management
    Sign up new user
    Log in
    Log out

    Create new user (bandmate)


    */
const express = require('express')
const MongoClient = require('mongodb').MongoClient

const MONGO_URL = 'mongodb://localhost:27017';


const bandmates = require('./bandmates');

const app = express()
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://speakezy.local:8888"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const port = 3000


MongoClient.connect(MONGO_URL, (err, client) => {
    // ... start the server
    if (err) {
        return console.log(err);
    }

    const db = client.db('bandmates')

    app.get('/', (req, res) => res.send('Hello World!'));

    // REF_DATA CRUD routes

    // List all genres
    app.get('/refdata/genres',
        (req, res) => {
            bandmates.refData.genres.list(req, res, db)
        }
    );

    // Get genre by id
    app.get('/refdata/genres/:genreId',
        (req, res) => {
            bandmates.refData.genres.read(req, res, db)
        }
    );

    // Create a genre
    app.put('/refdata/genres/',
        (req, res) => {
            bandmates.refData.genres.create(req, res, db)
        }
    );



    // USR_DATA CRUD routes

    // List all users
    app.get('/usrdata/users',
        (req, res) => {
            bandmates.usrData.users.list(req, res, db)
        }
    );

    // Get user by id
    app.get('/usrdata/users/:userId',
        (req, res) => {
            bandmates.usrData.users.read(req, res, db)
        }
    );

    // Create a user
    app.put('/usrdata/users/',
        (req, res) => {
            bandmates.usrData.users.create(req, res, db)
        }
    );

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))

})