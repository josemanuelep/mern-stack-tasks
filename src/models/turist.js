const mongoose = require('mongoose');
const { Schema } = mongoose;

const TuristSchema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    mail: { type: String, required: true },
    password: { type: String, required: true },
    doc_type: { type: String, required: true },
    doc_num: { type: Number, required: true },
    phone: { type: Number, required: false },
    img_profile: { type: String, required: false },
    ubication: {
        department: String,
        city: String
    }
});

module.exports = mongoose.model('Turist', TuristSchema);
