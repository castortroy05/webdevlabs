const { response } = require('express');
const GuestbookDAO = require('../models/guestbookModel');

const db = new GuestbookDAO();
let DAO = require('../models/guestbookModel.js');
let dao = new DAO();


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

controller.get('/filter/:author', function(request, response){
    console.log("filtering ", request.params.author);
    let user = request.params.author;
    dao.getEntryByUser(user)
    .then((entries) => {
        response.render("entries", {
            "title": "Guest Book",
            "entries": entries
        });
    })
    .catch((err) => {
        console.log('Error: ')
        console.log(JSON.stringify(err))
    });
})

exports.peters_entries_list = function(req, res) {
    res.send('<h1>Not yet implemented: show a list of guestbook entries.</h1>');
    db.getPetersEntries();
}

exports.show_user_entries = function (req, res) {
    console.log('filtering author name', req.params.author);

    let user = req.params.author;
    db.getEntryByUser(user).then((entries) => {
        res.render('entries', {
            'title': 'Guest Book',
            'entries': entries
        });
    }).catch((err) => {
        console.log('error handling author ', err);
    });
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