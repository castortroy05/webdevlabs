const express = require('express');

const path = require('path');

const nedb = require('nedb');

const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  });
  
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressSession);

const passport = require('passport');

app.use(passport.initialize());

app.use(passport.session());

const router = require('./routes/exerciseRoutes');

const mustache = require('mustache-express');

const app = express();

const public = path.join(__dirname, 'public');

app.use(express.urlencoded({extended: false}));

app.use(express.static(public));

app.engine('mustache', mustache());

app.set('view engine', 'mustache');

app.use('/', router);

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('Server started on port ' + port + ' Ctrl & C to quit');
})