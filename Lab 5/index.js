const express = require('express');

const path = require('path');

const app = express();

const router = require('./routes/guestbookRoutes');

const public = path.join(__dirname, 'public');

app.use(express.static(public));

app.use('/', router);

app.listen(4000, () => {
    console.log('Server started on port 4000. Ctrl & C to quit');
})