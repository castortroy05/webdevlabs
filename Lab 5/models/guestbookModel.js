const nedb = require('nedb');
const { inherits } = require('util');


class Guestbook{
constructor(dbFilePath) {
    if(dbFilePath)
    {
    this.db = new nedb({ filename: dbFilePath, autoload: true});
    console.log('DB connected to ' + dbFilePath);
    } else {
        this.db = new nedb();
    }
}

//a function to seed the database
init() {
    this.db.insert({
        subject: 'I liked the exhibition',
        contents: 'nice',
        published: '2020-02-16',
        author: 'Peter'
    });
    //for later debugging
    console.log('db entry Peter inserted');

    this.db.insert({
        subject: "Didn't like it",
        contents: 'A really terrible style',
        published: '2020-02-18',
        author: 'Ann'
    });
    //for later debugging
    console.log('db entry Anne inserted');

}

}

//make the module visible outside
module.exports = Guestbook;