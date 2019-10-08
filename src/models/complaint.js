const mongoose = require('mongoose');
const { Schema } = mongoose;

const complaint_Schema = new Schema({
    menssage: { type: String, required: true },
    date_time: { type: Date, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'Turist' }
});

module.exports = mongoose.model('Complaint', complaint_Schema);