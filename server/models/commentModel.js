const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    username: String,
    content: String,
    post_id: String,
    
    reply: Array
}, {
    timestamps: true
})


module.exports = mongoose.model('Comments', commentSchema)