const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    role: { type: String, required: true },
    name: { type: String, required: true },
    company: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model('Contact', contactSchema)