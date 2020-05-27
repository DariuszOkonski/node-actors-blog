const mongoose = require('mongoose');
const Comment = require('./comment');

const actorSchema = new mongoose.Schema({
    name: String, 
    surname: String, 
    country: String, 
    picture: String,
    description: String,
    created: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

module.exports = mongoose.model('actor', actorSchema);