const express = require('express');

const router = express.Router();

const controller = require('../controllers/guestbookControllers.js');

let DAO = require('../models/guestbookModel.js');
let dao = new DAO();

router.get("/", controller.landing_page);

router.get('/guestbook', controller.entries_list);

router.get('/new', controller.new_entry);

router.post('/new', controller.post_new_entry);

router.get('/about', controller.about_page);

router.get('/peter', controller.peters_entries_list);

router.get('/posts/:author', controller.show_user_entries);

roouter.get('/delete', controller.delete_entry);

router.get('/filter/:author', function(request, response){
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

router.use(function(req, res) {
    res.status(404);
    res.type('html/plain');
    res.send('404 Not Found');
})

router.use(function(err, req, res, next) {
    res.status(500);
    res.type('html/plain');
    res.send('Internal Server Error borked');
})

module.exports = router;