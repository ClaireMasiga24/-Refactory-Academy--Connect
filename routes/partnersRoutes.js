const express = require('express');
const router = express.Router();
const Partners = require('../models/partners');

// Create a new partner
router.post('/', async (req, res) => {
    const { name, description, phoneNumber, email, category, isActive } = req.body;
    try {
        const partner = new Partners({ name, description, phoneNumber, email, category, isActive });
        await partner.save();
        res.status(201).json(partner);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all partners
router.get('/', async (req, res) => {
    try {
        const partners = await Partners.find();
        res.json(partners);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get partner by ID
router.get('/:id', async (req, res) => {
    try {
        const partner = await Partners.findById(req.params.id);
        if (!partner) return res.status(404).json({ message: 'Partner not found' });
        res.json(partner);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a partner
router.put('/:id', async (req, res) => {
    try {
        const partner = await Partners.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!partner) return res.status(404).json({ message: 'Partner not found' });
        res.json(partner);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a partner
router.delete('/:id', async (req, res) => {
    try {
        const partner = await Partners.findByIdAndDelete(req.params.id);
        if (!partner) return res.status(404).json({ message: 'Partner not found' });
        res.json({ message: 'Partner deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
