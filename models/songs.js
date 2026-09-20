const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: String,
    artist: String,
    status: String
});

module.exports = mongoose.model('Song', schema);