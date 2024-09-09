const express = require('express');
const router = express.Router();
const Students = require('../models/students');

// Create a new student
router.post('/', async (req, res) => {
    const { studentID, firstName, lastName, phoneNumber, email, course, gender, isVaccinated } = req.body;
    try {
        const student = new Students({ studentID, firstName, lastName, phoneNumber, email, course, gender, isVaccinated });
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all students
router.get('/', async (req, res) => {
    try {
        const students = await Students.find();
        res.json(students);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get student by ID
router.get('/:id', async (req, res) => {
    try {
        const student = await Students.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a student
router.put('/:id', async (req, res) => {
    try {
        const student = await Students.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a student
router.delete('/:id', async (req, res) => {
    try {
        const student = await Students.findByIdAndDelete(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json({ message: 'Student deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
