const express = require('express');
const router = express.Router();
const User = require('../models/users');

// get all user info
router.get('/', async (req, res) => { 
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json('Server Error');
    }
})

router.get('/', (req, res) => {
    res.send(req.params.id)
}
);
//create
router.post('/', (req, res) => {
});

//update
router.patch('/', (req, res) => {
});

//delete
router.delete('/:id', (req, res) => {
});



module.exports = router;