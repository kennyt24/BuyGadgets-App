require("dotenv").config();
//require("./config/database")
const express = require('express');
const {connect} = require('./config/database');

//trying to connect with database alternatively. 
connect()

const app = express();

app.use(express.json());

// Logic goes here

module.exports = app;