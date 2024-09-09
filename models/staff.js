const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    staffID: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String },
    email: { type: String, required: true },
    role: { type: String },
    gender: { type: String, enum: ['Male', 'Female'] },
    isVaccinated: { type: Boolean, default: false }
});

module.exports = mongoose.model('Staff', staffSchema);
