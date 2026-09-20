const express = require('express');
const router = express.Router();
const Song = require('./models/songs');

// GET alle Songs
router.get('/songs', async(req, res) => {
    const allSongs = await Song.find();
    res.send(allSongs);
});

// POST neuen Song
router.post('/songs', async(req, res) => {
    const newSong = new Song({
        title: req.body.title,
        artist: req.body.artist,
        status: req.body.status
    });
    await newSong.save();
    res.send(newSong);
});

// GET Song per Song-ID
router.get('/songs/:id', async(req, res) => {
    try {
        const song = await Song.findOne({ _id: req.params.id });
        res.status(200);
        res.send(song);
    } catch {
        res.status(404);
        res.send({ error: "Song does not exist!" });
    }
});

// PATCH einen Song aktualisieren
router.patch('/songs/:id', async(req, res) => {
    try {
        const song = await Song.findOne({ _id: req.params.id });
        if (req.body.title) song.title = req.body.title;
        if (req.body.artist) song.artist = req.body.artist;
        if (req.body.status) song.status = req.body.status;
        await Song.updateOne({ _id: req.params.id }, song);
        res.send(song);
    } catch {
        res.status(404);
        res.send({ error: "Song does not exist!" });
    }
});

// DELETE einen Song
router.delete('/songs/:id', async(req, res) => {
    try {
        await Song.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch {
        res.status(404);
        res.send({ error: "Song does not exist!" });
    }
});

module.exports = router;