const GuestbookDAO = require('../models/guestbookModel');

const db = new GuestbookDAO();

exports.entries_list = function(req, res) {
    //res.send('<h1>Not yet implemented: show a list of guestbook entries.</h1>');
    //db.getAllEntries();
    res
    res.render('entries',
     {'title': 'Guest Book'
    });
}

exports.peters_entries_list = function(req, res) {
    res.send('<h1>Not yet implemented: show a list of guestbook entries.</h1>');
    db.getPetersEntries();
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
//     res.render('entries',
//     {'title': 'Guest Book',
//     'entries': [{
//     'subject': 'Good day out',
//     'contents' : 'We had a really good time visiting the museum.'
//     },
//     {
//         'subject': 'Good place to be on a rainy day.',
//         'contents': 'Nice paintings too.'
//     },
//     {
//     'subject': 'Yummy',
//     'contents': 'Good Food.'
//     }
//   ]
// });
//     db.init();
}

exports.about_page = function(req, res) {
    res.send('<h1>Not yet implemented: show an about page</h1>');
}

exports.new_entry = function(req, res) {
    res.send('<h1>Not yet implemented: show a new entry page</h1>');
}