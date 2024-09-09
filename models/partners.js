const mongoose = require('mongoose');

const partnersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    dateOfRegistration: { type: Date, default: Date.now },
    phoneNumber: { type: String },
    email: { type: String, required: true },
    category: { type: String, enum: ['Industrial Partner', 'Project Partner', 'Funding Partner'] },
    isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Partners', partnersSchema);
