const mongoose = require('mongoose');
const { Schema } = mongoose;

const turist_place_Schema = new Schema({

    name: { type: String, required: true },
    place_type: { type: String, required: true },
    desciption: { type: String, required: true },
    mail: { type: String, required: true },
    phone_number: { type: Number, required: true },
    cost: { type: Number, required: true },
    activities: [{ type: String }],
    available_bonuses: {
        Recoger_basuras: { type: Number },
        Compras_artesanales: { type: Number },
        Siembra_arbol: { type: Number },
        ir_bicicleta: { type: Number },
    },
    ubication: {
        department: { type: String, required: true },
        city: { type: String, required: true },
        land: { type: String },
        corregimiento: { type: String },
    }, schedule: {
        monday: [String],
        tuesday: [String],
        wednesday: [String],
        thursday: [String],
        friday: [String],
        saturday: [String],
        sunday: [String],
        festives: [String],
    },
    facilities: {
        hotels: [String],
        restaurants: [String],
        parking: {
            are_there_parking: true,
            cost: 5000
        }
    },
    score: {
        number_score: 2,
        average: 4
    },
    images: [String],
    comments: [
        { type: Schema.Types.ObjectId, ref: 'Comments' }
    ]
});

module.exports = mongoose.model('Turist_place', turist_place_Schema);
