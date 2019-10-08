const mongoose = require('mongoose');
const { Schema } = mongoose;

const comments_Schema = new Schema({
    comment: { type: String, required: true },
    date_time: { type: Date, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'Turist' }
});

module.exports = mongoose.model('Comment', comments_Schema);