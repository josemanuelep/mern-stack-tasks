const express = require('express');
const router = express.Router();

const Place = require('../models/turist_places');

// GET ALL
router.get('/', async (req, res) => {
    const places = await Place.find();
    res.json(places);
});

// GET BY ID
router.get('/:id', async (req, res) => {
    const place = await Place.findById(req.params.id);
    res.json(place);
});

// UPDATE
router.put('/:id', async (req, res) => {
    const { name, place_type, desciption, mail, password, phone_number, cost, activities, available_bonuses, ubication, schedule, hotels, restaurants, parking, score, images, comments } = req.body;
    const updated_place = new Object({ name, place_type, desciption, mail, password, phone_number, cost, activities, available_bonuses, ubication, schedule, hotels, restaurants, parking, score, images, comments });
    await Place.findByIdAndUpdate(req.params.id, updated_place);
    res.json({ status: 'Turist Updated' });
});

// ADD
router.post('/', async (req, res) => {
    const { name, place_type, desciption, mail, password, phone_number, cost, activities, available_bonuses, ubication, schedule, hotels, restaurants, parking, score, images, comments } = req.body;
    const place = new Place({ name, place_type, desciption, mail, password, phone_number, cost, activities, available_bonuses, ubication, schedule, hotels, restaurants, parking, score, images, comments });
    await place.save();
    res.json({ status: 'Place ' + place.name + ' Saved' });
});

//DELETE
router.delete('/:id', async (req, res) => {
    await Place.findByIdAndRemove(req.params.id);
    res.json({ status: 'Place Deleted' });
});


module.exports = router;
