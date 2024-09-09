const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    studentID: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String },
    email: { type: String, required: true },
    course: { type: String },
    gender: { type: String, enum: ['Male', 'Female'] },
    isVaccinated: { type: Boolean, default: false }
});

module.exports = mongoose.model('Students', studentsSchema);
