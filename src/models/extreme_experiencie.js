const mongoose = require('mongoose');
const { Schema } = mongoose;

const extreme_Schema = new Schema({
    nombre: { type: String, required: true },
    ubication: {
        department: { type: String, required: true },
        city: { type: String, required: true },
        land: { type: String },
        corregimiento: { type: String }
    },
    difficulty: { type: String },
    costo: { type: String, required: true },
    in_charge: {
        names: { type: String, required: true },
        last_name: { type: String, required: true },
        phone_number: { type: Number, required: true },
    },
    images: [String]
});

module.exports = mongoose.model('Extreme_experiencie', extreme_Schema);
