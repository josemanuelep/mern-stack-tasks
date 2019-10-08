const express = require('express');
const router = express.Router();

// Task Model
const Turist = require('../models/turist');

// GET all Tasks
router.get('/', async (req, res) => {
    const turists = await Turist.find();
    res.json(turists);
});


// ADD a new task
router.post('/', async (req, res) => {
    const { name, last_name, mail } = req.body;
    const turist = new Turist({ name, last_name, mail });
    await turist.save();
    res.json({ status: 'Turist Saved' });
});


module.exports = router;
