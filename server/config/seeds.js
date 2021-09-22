const db = require('./connection');
const { User, Product, Category, Store } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'vegetables' },
        { name: 'fruits' },
        { name: 'meats' },
        { name: 'dessert' },
        { name: 'dairy' }
    ]);

    console.log('categories seeded');

    await User.deleteMany();

    const users = await User.insertMany([
        {
            username: '',
            email: '',
            password: '',
            account: 'seller'
        },
        {
            username: '',
            email: '',
            password: '',
            account: 'seller'
        },
        {
            username: '',
            email: '',
            password: '',
            account: 'seller'
        },
        {
            username: '',
            email: '',
            password: '',
            account: 'buyer'
        },
        {
            username: '',
            email: '',
            password: '',
            account: 'buyer'
        },
        {
            username: '',
            email: '',
            password: '',
            account: 'buyer'
        }
    ]);

    console.log('users seeded');

    await Store.deleteMany();

    const stores = await Store.insertMany([
        {
            storeName: '',
            storeOwner: ''
        },
        {
            storeName: '',
            storeOwner: ''
        },
        {
            storeName: '',
            storeOwner: ''
        }
    ]);

    console.log('stores seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ]);

    console.log('products seeded');

    process.exit();
})