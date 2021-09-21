const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Store, Category } = require('../models');
//import for JWT authentication
//const { signToken } = require('../utils/auth');

//import for free stripe "integration"/testing purposes
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        helloWorld: () => {
            return 'Hello World';
        },
        sushi: () => {
            return 'Time to order sushi';
        },
        categories: async () => {
            return await Category.find();
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id);
                return user;
            }
        },
        products: async (parent, context) => {
            const params = {};

            return await Product.find(params);
        },
        product: async (parent, { _id}) => {
            return await Product.findById(_id);
        }
    },
    Mutations: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            return { user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            //needs authentication to update
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            //creates JWT association with specific user
            //const token = signToken(user);
            //return { token, user };

            //REMOVE THIS RETURN ONCE JWT IS IMPLEMENTED
            return { user };
        },
        addProduct: async (parent, args) => {
            const product = await Product.create(args);

            //needs authentication to add/create new product
            return { product };
        },
        updateProduct: async (parent, args, context) => {
            if (context.product) {
                return await Product.findByIdAndUpdate(context.product._id, args, { new: true });
            }

            //needs authentication to update
        },
        createStore: async (parent, args) => {
            const store = await Store.create(args);

            //needs authentication to create store
            return { store };
        }
    }
};

module.exports = resolvers;