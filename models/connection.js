const mongoose = require('mongoose');

function connectToMongoDb() {
    mongoose.connect('mongodb://localhost/actorsDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, (err) => {
        if(err) {
            console.log('ERROR: no connection...');
        } else {
            console.log('MongoDB connected...');
        }
    })
}

module.exports = connectToMongoDb;