const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const PORT = process.env.PORT || 5000;

var passport = require('passport');
var util = require('util');
var InstagramStrategy = require('passport-instagram').Strategy;

var INSTAGRAM_CLIENT_ID = process.env.INSTAGRAM_CLIENT_ID;
var INSTAGRAM_CLIENT_SECRET = process.env.INSTAGRAM_CLIENT_SECRET;

require('dotenv').config();
var app = express();
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs');
  app.get('/', (req, res) => res.render('index'));
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

  app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
