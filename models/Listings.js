const mongoose = require('mongoose');


const listingSchema = new mongoose.Schema({
   username: {
    type: String,
    require: true,
   },
   category: {
    type: String,
    require: true,
    min: 3,
   },
    title: {
        type: String,
        require: true,
        min: 3,
    },
    description: {
        type: String,
        require: true,
        min: 10,
    },
    quantity: {
        type: Number,
        require: true,
        min: 1,
    },
    phone_number: {
        type: String,
        require: true,
        min: 10,
    },
    email: {
        type: String,
        require: true,
        max: 25,
    },
    date: {
        type: Date,
        default: Date.now,
        require: true,
    },
    lat: {
        type: Number,
        require: true,
    },
    lng: {
        type: Number,
        require: true,
    },
    },
 
    { timestamps: true }
);

// module.exports = mongoose.model("Listing", Schema);

module.exports = mongoose.model("Listing", listingSchema);