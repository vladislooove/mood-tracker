const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');

const serverPort = require('./etc/config.json').serverPort;
const db =require('./utils/DataBaseUtils.js');

db.setUpConnection();

const app = express();

// configure app

app.use(cors());
app.use(bodyParser.json());    

// serialize and deserialize
passport.serializeUser(function(user, done) {
    console.log('serializeUser: ' + user._id);
    done(null, user._id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user){
        console.log(user);
        if(!err) done(null, user);
        else done(err, null);
    });
}); 

// api
app.get('/auth/github',
    passport.authenticate('github'),
    function(req, res){}
);


app.listen(serverPort, () => {
    console.log('Server is running on ' + serverPort);
})