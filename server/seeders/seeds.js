const faker = require("faker");

const db = require("../config/connection");
const { Product } = require("../models");

db.once("open", async () => {
  await Product.deleteMany({});

  // create product data
  const productData = [];

  for (let i = 0; i < 10; i += 1) {
    const name = faker.internet.domainWord();
    const price = Math.floor(Math.random() * (200 - 5) + 5 / 100);
    const seller = faker.internet.email();
    const description = faker.internet.userName();

    productData.push({ name, price, seller, description });
  }

  const createdProducts = await Product.collection.insertMany(productData);

  console.log("all done!");
  process.exit(0);
});
