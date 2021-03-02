const express = require('express');

const router = express.Router();

const controller = require('../controllers/guestbookControllers.js');

router.get("/", controller.landing_page);

router.get('/guestbook', controller.entries_list);

router.get('/new', controller.new_entry);

router.get('/about', controller.about_page);

router.get('/peter', controller.peters_entries_list);

router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not Found');
})

router.use(function(err, req, res, next) {
    res.status(500);
    res.type('html/plain');
    res.send('Internal Server Error borked');
})

module.exports = router;