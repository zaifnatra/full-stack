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
)
//create
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        userSubscription: req.body.userSubscription,
        userSubscriptionDate: req.body.userSubscriptionDate
    });

    try {
        const newSubscriber = await user.save();
        res.status(201).json(newSubscriber); 
    } catch (err) {
        res.status(400).json({ message: err.message }); 
    }
});


//update
router.patch('/', (req, res) => {
});

//delete
router.delete('/:id', (req, res) => {
});



module.exports = router;