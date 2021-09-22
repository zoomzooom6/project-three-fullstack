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
        users: async () => {
            return await User.find();
        },
        user: async (parent, { _id}) => {
            const user = await User.findById(_id);
            if (!user) {
                return 'No user found with that id.'
            }
            return user;
        },
        products: async (parent, { category, name }) => {
            const params = {};

            if (category) {
                params.category = category;
            }

            // if (name) {
            //     params.name = {
            //         $regex: name
            //     }
            // }

            return await Product.find(params).populate('category');
        },
        product: async (parent, { _id}) => {
            return await Product.findById(_id);
        },
        store: async (parent, { _id}) => {
            return await Store.findById(_id);
        },
        stores: async () => {
            return await Store.find();
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            return user;
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
            return product;
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