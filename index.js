const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const PORT = process.env.PORT || 3000;


var app = express();
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

  app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
