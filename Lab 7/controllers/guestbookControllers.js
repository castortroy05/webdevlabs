const { response } = require('express');
const GuestbookDAO = require('../models/guestbookModel');

const db = new GuestbookDAO();

exports.entries_list = function(req, res) {
    db.getAllEntries().then((list) => {
        res.render('entries', {
            'title': 'Guest Book',
            'entries': list
        });
        console.log('Promise Resolved');
    }).catch((err)=>{
        console.log('Promise Rejected ', err);
    })
}

exports.peters_entries_list = function(req, res) {
    res.send('<h1>Not yet implemented: show a list of guestbook entries.</h1>');
    db.getPetersEntries();
}

exports.post_new_entry = function(req, res) {
    if (!req.body.author) {
        response.status(400).send("Entries must have an author.");
        return;
    }
        db.addEntry(req.body.author, req.body.subject, req.body.contents);
        res.redirect('/');
    
}
exports.landing_page = function(req, res) {
    db.init();
    db.getAllEntries().then((list) => {
        res.render('entries', {
            'title': 'Guest Book',
            'entries': list
        });
        console.log('Promise Resolved');
    }).catch((err)=>{
        console.log('Promise Rejected ', err);
    })
}

exports.about_page = function(req, res) {
    res.send('<h1>Not yet implemented: show an about page</h1>');
}

exports.new_entry = function(req, res) {
    res.render('newEntry', { 'title': 'Guest Book'})
    
}