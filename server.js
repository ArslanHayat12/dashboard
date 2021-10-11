
var express = require('express');
var path = require('path');
const cors = require('cors');
const passport = require("passport")
const dotenv = require("dotenv")
var GoogleStrategy = require('passport-google-oauth20').Strategy;
// const storage = require('node-sessionstorage')
dotenv.config()

var app = express();
app.use(cors());
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, "static")));
app.use(express.static(path.join(__dirname, "build", "static")));

app.get('/',(req,res)=>res.send('Hello'))
passport.use(new GoogleStrategy({
    clientID: '963093892208-tjm4vak0dd45mejh4c8orjd5el4cf3r5.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
 
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.listen(process.env.PORT || 5000);
module.exports = app;