const functions = require("firebase-functions");
var express = require('express');
var path = require('path');
const cors = require('cors');
const dotenv = require("dotenv")
// const storage = require('node-sessionstorage')
dotenv.config()

var app = express();
app.use(cors());
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, "static")));
app.use(express.static(path.join(__dirname, "build", "static")));

app.listen(process.env.PORT || 5000);
module.exports = app;