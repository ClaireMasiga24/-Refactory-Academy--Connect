const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    dateOfRegistration: { type: Date, default: Date.now },
    headOfDepartment: { type: String },
    category: { type: String, enum: ['Macro', 'Micro'] },
    size: { type: Number },
    isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Department', departmentSchema);
