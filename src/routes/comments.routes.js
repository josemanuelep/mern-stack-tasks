const express = require('express');
const router = express.Router();

const Comment = require('../models/comments');

// GET ALL
router.get('/', async (req, res) => {
    const comments = await Comment.find();
    res.json(comments);
});

// GET BY ID
router.get('/:id', async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.json(comment);
});

// UPDATE
router.put('/:id', async (req, res) => {
    const { comment, date_time } = req.body;
    const updated_comment = new Object({ comment, date_time });
    await Comment.findByIdAndUpdate(req.params.id, updated_comment);
    res.json({ status: 'Comment Updated' });
});

// ADD
router.post('/', async (req, res) => {
    const { comment, date_time, user } = req.body;
    const new_comment = new Comment({ comment, date_time, user });
    await new_comment.save();
    res.json({ status: 'Comment ' + new_comment.comment + ' Saved' });
});

//DELETE
router.delete('/:id', async (req, res) => {
    await Comment.findByIdAndRemove(req.params.id);
    res.json({ status: 'Comment Deleted' });
});


module.exports = router;
