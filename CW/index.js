const express = require('express');

const path = require('path');

const router = require('./routes/guestbookRoutes');

const mustache = require('mustache-express');

const app = express();

const public = path.join(__dirname, 'public');

app.use(express.static(public));

app.engine('mustache', mustache());

app.set('view engine', 'mustache');

app.use('/', router);

app.listen(4000, () => {
    console.log('Server started on port 4000. Ctrl & C to quit');
})