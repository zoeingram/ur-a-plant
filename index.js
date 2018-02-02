const express = require('express');
const path = require('path');
const app = express();

//fix this
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('static'))

app.listen(3000, () => console.log('app running on port 3000'))
