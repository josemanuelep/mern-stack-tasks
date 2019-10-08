const express = require('express');
const router = express.Router();

const Turist = require('../models/turist');

// GET ALL
router.get('/', async (req, res) => {
    const turists = await Turist.find();
    res.json(turists);
});

// GET BY ID
router.get('/:id', async (req, res) => {
    const turist = await Turist.findById(req.params.id);
    res.json(turist);
});

// UPDATE
router.put('/:id', async (req, res) => {
    const { name, last_name, mail, password, doc_type, doc_num, phone, img_profile } = req.body;
    const updated_turist = new Object({ name, last_name, mail, password, doc_type, doc_num, phone, img_profile });
    await Turist.findByIdAndUpdate(req.params.id, updated_turist);
    console.log(updated_turist);
    res.json({ status: 'Turist Updated' });
});

// ADD
router.post('/', async (req, res) => {
    const { name, last_name, mail, password, doc_type, doc_num, phone, img_profile, ubication } = req.body;
    const turist = new Turist({ name, last_name, mail, password, doc_type, doc_num, phone, img_profile, ubication });
    await turist.save();
    res.json({ status: 'Turist Saved' });
});

//DELETE

router.delete('/:id', async (req, res) => {
    await Turist.findByIdAndRemove(req.params.id);
    res.json({ status: 'Turist Deleted' });
});


module.exports = router;
