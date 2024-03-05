const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const user = await User.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.getUserById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ error: 'User not found' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await User.deleteUser(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(404).json({ error: 'User not found' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const user = await User.updateUser(req.params.id, req.body);
        res.json(user);
    } catch (error) {
        res.status(404).json({ error: 'User not found' });
    }
});

module.exports = router;
