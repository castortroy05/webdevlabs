const nedb = require('nedb');

const db = new nedb({filename: 'students.db', autoload: true});

console.log('db created');

db.insert({
    student : 'Peter',
    age: 20,
    programme: 'Computing',
    grant: false,
    modules: [{
        name: 'Programming',
        grade: 65
    },
    {
        name: 'Database',
        grade: 70
    },
    {
        name: 'Networking',
        grade: 80

    }
]
}, function(err, newDoc) {
    if(err) {
        console.log('error ', err);
    }else {console.log ('Entry added: ', newDoc)
}    
});

db.insert({
    student : 'Ann',
    age: 21,
    programme: 'Networking',
    grant: true,
    modules: [{
        name: 'Routing',
        grade: 70
    },
    {
        name: 'Security',
        grade: 61
    },
    {     
        name: 'Server Management',
        grade: 62

    }
]
}, function(err, newDoc) {
    if(err) {
        console.log('error ', err);
    }else {console.log ('Entry added: ', newDoc)
}    
});

db.update({ student: 'Ann', 'modules.name': 'routing', }, { $set:{ 'modules.grade': 80} }, {}, function(err, numUp) {
    if (err) {
        console.log('error updating documents ', err);
    } else {
        console.log(numUp, 'document(s) updated'); 
    }
})