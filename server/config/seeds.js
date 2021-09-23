const db = require("./connection");
const { User, Product, Category, Store } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "vegetables" },
    { name: "fruits" },
    { name: "meats" },
    { name: "dessert" },
    { name: "dairy" },
  ]);

  console.log("categories seeded");

  await User.deleteMany();

  const users = await User.create([
    {
      username: "Gaben Weston Jr",
      email: "seller1@email.com",
      password: "password12345",
      account: "seller",
    },
    {
      username: "Enthony Longo",
      email: "seller2@email.com",
      password: "password12345",
      account: "seller",
    },
    {
      username: "Jaffrey York",
      email: "seller3@email.com",
      password: "password12345",
      account: "seller",
    },
    {
      username: "Bell Gates",
      email: "buyer1@email.com",
      password: "password12345",
      account: "buyer",
    },
    {
      username: "Elan Musk",
      email: "buyer2@email.com",
      password: "password12345",
      account: "buyer",
    },
    {
      username: "Juff Bezos",
      email: "buyer3@gmail.com",
      password: "password12345",
      account: "buyer",
    },
  ]);

  console.log("users seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "bananas",
      price: 2,
      description: "PRODUCT DESCRIPTION",
      quantity: 25,
      image: "banana.jpg",
      category: categories[1]._id,
    },
    {
      name: "carrots",
      price: 1,
      description: "PRODUCT DESCRIPTION",
      quantity: 10,
      image: "carrots.jpg",
      category: categories[0]._id,
    },
    {
      name: "rib eye steak",
      price: 15,
      description: "PRODUCT DESCRIPTION",
      quantity: 5,
      image: "ribeye.jpg",
      category: categories[2]._id,
    },
    {
      name: "ben & jerry's cookies and cream",
      price: 5,
      description: "PRODUCT DESCRIPTION",
      quantity: 10,
      image: "icecream.jpg",
      category: categories[3]._id,
    },
    {
      name: "2% milk, 4L",
      price: 3,
      description: "PRODUCT DESCRIPTION",
      quantity: 12,
      image: "milk.jpg",
      category: categories[4]._id,
    },
    {
      name: "strawberries",
      price: 3,
      description: "PRODUCT DESCRIPTION",
      quantity: 50,
      image: "strawberries.jpg",
      category: categories[1]._id,
    },
    {
      name: "broccoli",
      price: 1,
      description: "PRODUCT DESCRIPTION",
      quantity: 28,
      image: "broccoli.jpg",
      category: categories[0]._id,
    },
    {
      name: "sashimi-grade salmon",
      price: 25,
      description: "PRODUCT DESCRIPTION",
      quantity: 5,
      image: "salmon.jpg",
      category: categories[2]._id,
    },
    {
      name: "lotus paste moon cake with 2 yolks",
      price: 12,
      description: "PRODUCT DESCRIPTION",
      quantity: 8,
      image: "mooncake.jpg",
      category: categories[3]._id,
    },
    {
      name: "heavy cream",
      price: 4,
      description: "PRODUCT DESCRIPTION",
      quantity: 7,
      image: "cream.jpg",
      category: categories[4]._id,
    },
  ]);

  console.log("products seeded");

  await Store.deleteMany();

  const stores = await Store.insertMany([
    {
      storeName: "Lablaws",
      storeOwner: users[0]._id,
      products: [products[0]._id, products[1]._id, products[2]._id],
    },
    {
      storeName: "Lungos",
      storeOwner: users[1]._id,
      products: [products[3]._id, products[4]._id, products[5]._id],
    },
    {
      storeName: "Ferm Boy",
      storeOwner: users[2]._id,
      products: [
        products[6]._id,
        products[7]._id,
        products[8]._id,
        products[9]._id,
      ],
    },
  ]);

  console.log("stores seeded");

  process.exit();
});
