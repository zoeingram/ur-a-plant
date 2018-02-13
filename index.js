const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

const app = express();

//fix this
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('static'))
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.listen(3000, () => console.log('app running on port 3000'))
