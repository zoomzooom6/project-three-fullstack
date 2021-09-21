const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name = {
        type: String,
        required: true,
        trim: true
    },
    price = { 
        type: Number,
        required: true,
    },
    description = {
        type: String
    },
    quantity = {
        type: Number,
        min: 0,
        default: 0
    },
    postedAt: {
        type: Date,
        default: Date.now
    },
    category = {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    store = {
        type: Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    }
});

const Product = model('Product', ProductSchema);

module.exports = Product;