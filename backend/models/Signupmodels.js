const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    // wont gonna show in front end
    date: {
        type: Date,
        default: Date.now()
    },
    isActive: {
        type: Boolean,
        default: true
        // INACTIVE:'active',
        // DEACTIVE: 'deactive'
    }
})

module.exports = mongoose.model('mytable', signUpTemplate)
