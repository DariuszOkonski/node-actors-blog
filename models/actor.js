const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
    name: String, 
    surname: String, 
    country: String, 
    picture: String,
    created: {
        type: Date,
        default: Date.now
    } 
});

module.exports = mongoose.model('actor', actorSchema);