const express = require('express');
const router = express.Router();

const Extreme = require('../models/extreme_experiencie');

// GET ALL
router.get('/', async (req, res) => {
    const extremes = await Extreme.find();
    res.json(extremes);
});

// GET BY ID
router.get('/:id', async (req, res) => {
    const extreme = await Extreme.findById(req.params.id);
    res.json(extreme);
});

// UPDATE
router.put('/:id', async (req, res) => {
    const { name, ubication, difficulty, cost, in_charge, images } = req.body;
    const updated_Extreme = new Object({ name, ubication, difficulty, cost, in_charge, images });
    await Extreme.findByIdAndUpdate(req.params.id, updated_Extreme);
    res.json({ status: 'Extreme Updated' });
});

// ADD
router.post('/', async (req, res) => {
    const { name, ubication, difficulty, cost, in_charge, images } = req.body;
    const new_Extreme = new Extreme({ name, ubication, difficulty, cost, in_charge, images });
    await new_Extreme.save();
    res.json({ status: 'Extreme ' + new_Extreme.name + ' Saved' });
});

//DELETE
router.delete('/:id', async (req, res) => {
    await Extreme.findByIdAndRemove(req.params.id);
    res.json({ status: 'Extreme Deleted' });
});


module.exports = router;
