const { Product } = require("../models");

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
