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
            username: 'Gaben Weston Jr',
            email: 'seller1@email.com',
            password: 'password12345',
            account: 'seller'
        },
        {
            username: 'Enthony Longo',
            email: 'seller2@email.com',
            password: 'password12345',
            account: 'seller'
        },
        {
            username: 'Jaffrey York',
            email: 'seller3@email.com',
            password: 'password12345',
            account: 'seller'
        },
        {
            username: 'Bell Gates',
            email: 'buyer1@email.com',
            password: 'password12345',
            account: 'buyer'
        },
        {
            username: 'Elan Musk',
            email: 'buyer2@email.com',
            password: 'password12345',
            account: 'buyer'
        },
        {
            username: 'Juff Bezos',
            email: 'buyer3@gmail.com',
            password: 'password12345',
            account: 'buyer'
        }
    ]);

    console.log('users seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            productName: 'bananas',
            price: 2,
            quantity: 25,
            image: 'banana.jpg',
            category: categories[1]._id
        },
        {
            productName: 'carrots',
            price: 1.50,
            quantity: 10,
            image: 'carrots.jpg',
            category: categories[0]._id
        },
        {
            productName: 'rib eye steak',
            price: 15,
            quantity: 5,
            image: 'ribeye.jpg',
            category: categories[2]._id
        },
        {
            productName: "ben & jerry's cookies and cream",
            price: 5,
            quantity: 10,
            image: 'icecream.jpg',
            category: categories[3]._id
        },
        {
            productName: '2% milk, 4L',
            price: 3.50,
            quantity: 12,
            image: 'milk.jpg',
            category: categories[4]._id
        },
        {
            productName: 'strawberries',
            price: 3,
            quantity: 50,
            image: 'strawberries.jpg',
            category: categories[1]._id
        },
        {
            productName: 'broccoli',
            price: 0.50,
            quantity: 28,
            image: 'broccoli.jpg',
            category: categories[0]._id
        },
        {
            productName: 'sashimi-grade salmon',
            price: 25,
            quantity: 5,
            image: 'salmon.jpg',
            category: categories[2]._id
        },
        {
            productName: 'lotus paste moon cake with 2 yolks',
            price: 12,
            quantity: 8,
            image: 'mooncake.jpg',
            category: categories[3]._id
        },
        {
            productName: 'heavy cream',
            price: 4.25,
            quantity: 7,
            image: 'cream.jpg',
            category: categories[4]._id
        }
    ]);

    console.log('products seeded');

    await Store.deleteMany();

    const stores = await Store.insertMany([
        {
            storeName: 'Lablaws',
            storeOwner: users[0]._id,
            products: [products[0]._id, products[1]._id, products[2]._id]
        },
        {
            storeName: 'Lengos',
            storeOwner: users[1]._id,
            products: [products[3]._id, products[4]._id, products[5]._id]
        },
        {
            storeName: 'Furm Boy',
            storeOwner: users[2]._id,
            products: [products[6]._id, products[7]._id, products[8]._id, products[9]._id]
        }
    ]);

    console.log('stores seeded');

    process.exit();
})