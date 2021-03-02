const GuestbookDAO = require('../models/guestbookModel');

const db = new GuestbookDAO();

exports.entries_list = function(req, res) {
    res.send('<h1>Not yet implemented: show a list of guestbook entries.</h1>');
    db.getAllEntries();
}

exports.peters_entries_list = function(req, res) {
    res.send('<h1>Not yet implemented: show a list of guestbook entries.</h1>');
    db.getPetersEntries();
}


exports.landing_page = function(req, res) {
    res.send('<h1>Welcome to my Application.</h1>');
    db.init();
}

exports.about_page = function(req, res) {
    res.send('<h1>Not yet implemented: show an about page</h1>');
}

exports.new_entry = function(req, res) {
    res.send('<h1>Not yet implemented: show a new entry page</h1>');
}