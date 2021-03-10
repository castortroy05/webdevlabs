const { rejects } = require('assert');
const nedb = require('nedb');
const { resolve } = require('path');
class Goals{
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
        exercise: 'Walk',
        details: 'nice',
        started: '2020-02-16',
        author: 'Peter'
    })
    //for later debugging
    console.log('db entry Peter inserted');

    this.db.insert({
        exercise: "Squats",
        details: '30 weighted squats',
        started: '2020-02-18',
        author: 'Ann'
    })
    //for later debugging
    console.log('db entry Anne inserted');

}

getAllGoals(){
    return new Promise((resolve, reject) => {
        //use the find() function of the database to get the data
        //error first callback function, err for error, goals for data
        this.db.find({}, function(err, goals){
            if (err){
            reject(err);
            //if no error, resolve the promise & return the data
             } else {
        resolve(goals);
        //to see what the returned data looks like 
        console.log('function all() returns ', goals);
    }   
    })
    })
}

addGoal(author, exercise, details, endDate) {

var goal = {
    author: author,
    exercise: exercise,
    details: details,
    started: new Date().toISOString().split('T')[0],
    endDate: endDate

}
console.log('goal created', entry);

this.db.insert(entry, function(err, doc) {
    if (err) {
        console.log('Error inserting goals', exercise);
    } else {
        console.log('document inserted into the database', doc);
    }
})
}

}

//make the module visible outside
module.exports = Goals;