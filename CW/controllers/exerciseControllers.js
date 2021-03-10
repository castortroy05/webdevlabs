const { response } = require('express');
const GoalsDAO = require('../models/exerciseModel');

const db = new GoalsDAO();

exports.goals_list = function(req, res) {
    db.getAllGoals().then((list) => {
        res.render('goals', {
            'title': 'Exercise Goals',
            'goals': list
        });
        console.log('Promise Resolved');
    }).catch((err)=>{
        console.log('Promise Rejected ', err);
    })
}



exports.post_new_goal = function(req, res) {
    if (!req.body.author) {
        response.status(400).send("Entries must have an author.");
        return;
    }
        db.addEntry(req.body.author, req.body.subject, req.body.contents);
        res.redirect('/');
    
}
exports.landing_page = function(req, res) {
    //db.init();
    db.getAllGoals().then((list) => {
        res.render('goals', {
            'title': 'Exercise Goals',
            'goals': list
        });
        console.log('Promise Resolved');
    }).catch((err)=>{
        console.log('Promise Rejected ', err);
    })
}

exports.about_page = function(req, res) {
    res.send('<h1>Not yet implemented: show an about page</h1>');
}

exports.new_goal = function(req, res) {
    res.render('newGoal', { 'title': 'Guest Book'})
    
}