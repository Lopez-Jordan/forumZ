const mongoose = require('mongoose');
const formatDate = require('../utils/formatDate');

const { Schema, model } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment",
        get: (timestamp) => formatDate(timestamp)
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;