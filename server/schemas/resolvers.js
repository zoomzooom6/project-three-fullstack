const { Product, Order } = require("../models");
// const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    helloWorld: () => {
      return "Hello World";
    },
    products: async () => {
      return Product.find();
    },
  },
};

module.exports = resolvers;
