const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Store, Category, Order } = require("../models");
//import for JWT authentication
const { signToken } = require("../utils/auth");

//import for free stripe "integration"/testing purposes
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    helloWorld: () => {
      return "Hello World";
    },
    sushi: () => {
      return "Time to order sushi";
    },
    categories: async () => {
      return await Category.find();
    },
    users: async () => {
      return await User.find();
    },
    user: async (parent, { _id }) => {
      const user = await User.findById(_id);
      if (!user) {
        return "No user found with that id.";
      }
      return user;
    },
    products: async () => {
      return Product.find();
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id);
    },
    store: async (parent, { _id }) => {
      return await Store.findById(_id).populate("storeOwner");
    },
    stores: async () => {
      return await Store.find().populate("storeOwner");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products");

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "CAD",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
    // order: async (parent, { _id }, context) => {
    //     if (context.user) {
    //         const user = await User.findById(context.user._id).populate({
    //             path: 'orders.products',
    //             populate: 'category'
    //         });

    //         return user.orders.id(_id);
    //     }

    //     throw new AuthenticationError('Not logged in');
    // },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      //creates JWT association with specific user
      const token = signToken(user);
      return { token, user };

      //REMOVE THIS RETURN ONCE JWT IS IMPLEMENTED
      //return { user };
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
    addProduct: async (parent, args, context) => {
      console.log(context);
      //needs authentication to add/create new product
      if (context.user) {
        const product = await Product.create(args);
      }

      return product;
    },
    updateProduct: async (parent, args, context) => {
      if (context.user) {
        return await Product.findByIdAndUpdate(context.product._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    createStore: async (parent, args, context) => {
      //needs authentication to create store
      if (context.user) {
        return await Store.create(args);
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
