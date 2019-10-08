const express = require('express');
const router = express.Router();

const Oficial = require('../models/oficial_entity');

// GET ALL
router.get('/', async (req, res) => {
    const oficialEntities = await Oficial.find();
    res.json(oficialEntities);
});

// GET BY ID
router.get('/:id', async (req, res) => {
    const oficial = await Oficial.findById(req.params.id);
    res.json(oficial);
});

// UPDATE
router.put('/:id', async (req, res) => {
    const { name, phone_number, mail, ubication, in_charge, images } = req.body;
    const updated_Oficial = new Object({ name, phone_number, mail, ubication, in_charge, images });
    await Oficial.findByIdAndUpdate(req.params.id, updated_Oficial);
    res.json({ status: 'Turist Updated' });
});

// ADD
router.post('/', async (req, res) => {
    const { name, phone_number, mail, ubication, in_charge, images } = req.body;
    const oficial = new Oficial({ name, phone_number, mail, ubication, in_charge, images });
    await oficial.save();
    res.json({ status: 'Oficial ' + oficial.name + ' Saved' });
});

//DELETE
router.delete('/:id', async (req, res) => {
    await Oficial.findByIdAndRemove(req.params.id);
    res.json({ status: 'Oficial Deleted' });
});


module.exports = router;
