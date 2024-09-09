const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    dateOfRegistration: { type: Date, default: Date.now },
    lead: { type: String },
    category: { type: String, enum: ['Technical', 'Non-technical'] },
    size: { type: Number },
    isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Course', courseSchema);
