const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    price: { 
        type: Number,
        required: true,
    },
    description: {
        type: String
    },
    image: {
        type: String,
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0
    },
    postedAt: {
        type: Date,
        default: Date.now
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});

const Product = model('Product', ProductSchema);

module.exports = Product;