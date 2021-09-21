const { Schema, model, Types } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  category: [],
  seller: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Product = model("Product", ProductSchema);

module.exports = Product;
