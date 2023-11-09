const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const candiesSchema = new Schema({
    
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0.99
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0
    },
});

const Candies = mongoose.model('Candies', candiesSchema);

module.exports = Candies;