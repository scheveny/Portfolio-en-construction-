const mongoose = require('mongoose');

const workSchema = mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    cover: { type: String, required: true },
    pictures: { type: String, required: true },
    description: { type: String, required: true },
    techs: { type: String, required: true },
});

module.exports = mongoose.model('Work', workSchema);