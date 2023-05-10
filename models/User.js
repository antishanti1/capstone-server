const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 15,
        unique: true
    },
    email: {
        type: String,
        require: true,
        max: 25,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 8,
    },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);