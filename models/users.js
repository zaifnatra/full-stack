const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },

    userSubscription: {
        type: String,
        required: true
    },

    userSubscriptionDate:{
        type: Date,
        required: true,
        default: Date.now
    }

    
    
})

module.exports = mongoose.model('User', userSchema);