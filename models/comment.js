const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: String,
    content: String,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('comment', commentSchema);