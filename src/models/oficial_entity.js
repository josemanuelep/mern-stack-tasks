const mongoose = require('mongoose');
const { Schema } = mongoose;

const oficial_entity_Schema = new Schema({
    name: { type: String, required: true },
    phone_number: { type: Number, required: true },
    mail: { type: String, required: true },
    ubication: {
        department: { type: String, required: true },
        city: { type: String, required: true },
        land: { type: String },
        corregimiento: { type: String }
    },
    in_charge: {
        position: { type: String, required: true },
        names: { type: String, required: true },
        last_name: { type: String, required: true },
        phone_number: { type: Number, required: true },
    },
    images: [String]
});

module.exports = mongoose.model('Oficial_entity', oficial_entity_Schema);
