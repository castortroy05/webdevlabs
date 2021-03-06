const { rejects } = require('assert');
const nedb = require('nedb');
const { resolve } = require('path');
class Guestbook{
constructor(dbFilePath) {
    if(dbFilePath)
    {
    this.db = new nedb({ filename: dbFilePath, autoload: true});
    console.log('DB connected to ' + dbFilePath);
    } else {
        this.db = new nedb();
        console.log('db connected in memory');
    }
}

//a function to seed the database
init() {
    this.db.insert({
        subject: 'I liked the exhibition',
        contents: 'nice',
        published: '2020-02-16',
        author: 'Peter'
    })
    //for later debugging
    console.log('db entry Peter inserted');

    this.db.insert({
        subject: "Didn't like it",
        contents: 'A really terrible style',
        published: '2020-02-18',
        author: 'Ann'
    })
    //for later debugging
    console.log('db entry Anne inserted');

}

getAllEntries(){
    return new Promise((resolve, reject) => {
        //use the find() function of the database to get the data
        //error first callback function, err for error, entries for data
        this.db.find({}, function(err, entries){
            if (err){
            reject(err);
            //if no error, resolve the promise & return the data
             } else {
        resolve(entries);
        //to see what the returned data looks like 
        console.log('function all() returns ', entries);
    }   
    })
    })
}

getEntryByUser(authorName){
    return new Promise((resolve, reject) => {
        //use the find() function of the database to get the data
        //error first callback function, err for error, entries for data
        this.db.find({author: authorName}, function(err, entries){
            if (err){
            reject(err);
            //if no error, resolve the promise & return the data
             } else {
        resolve(entries);
        //to see what the returned data looks like 
        console.log('getEntryByUser() returns ', entries);
    }   
    })
    })

}

getPetersEntries(){
    return new Promise((resolve, reject) => {
        //use the find() function of the database to get the data
        //error first callback function, err for error, entries for data
        this.db.find({author: 'Peter'}, function(err, entries){
            if (err){
            reject(err);
            //if no error, resolve the promise & return the data
             } else {
        resolve(entries);
        //to see what the returned data looks like 
        console.log('getPetersEntries() returns ', entries);
    }   
    })
    })
}



addEntry(author, subject, contents) {

var entry = {
    author: author,
    subject: subject,
    contents: contents,
    published: new Date().toISOString().split('T')[0]
}
console.log('entry created', entry);

this.db.insert(entry, function(err, doc) {
    if (err) {
        console.log('Error inserting document', subject);
    } else {
        console.log('document inserted into the database', doc);
    }
})
}

deleteEntry(id){
this.db.remove({_id: id} ,{}, function(err, rem) {
    if (err) {
        console.log('error in deleteEntry', err);
    } else {
        console.log(rem, 'entries deleted');
    }
})
}
}

//make the module visible outside
module.exports = Guestbook;