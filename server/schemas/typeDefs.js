const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    account: String
    store: Store
  }

  type Product {
    _id: ID
    productName: String
    price: Float
    description: String
    image: String
    quantity: Int
    category: Category
  }

  type Store {
    _id: ID
    storeName: String
    storeOwner: User
    products: [Product]
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    helloWorld: String
    sushi: String
    categories: [Category]
    users: [User]
    user(_id: ID!): User
    products(category: ID, productName: String): [Product]
    product(_id: ID!): Product
    store(_id: ID!): Store
    stores: [Store]
    checkout(products: [ID]!): Checkout
    order(_id: ID!): Order
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      account: String!
      store: ID
    ): Auth
    updateUser(
      username: String
      email: String
      password: String
      store: ID
    ): User
    login(email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    addProduct(
      productName: String!
      price: Float!
      description: String
      quantity: Int
      category: ID!
    ): Product
    updateProduct(
      name: String
      price: Int
      description: String
      quantity: Int
      category: ID!
    ): Product
    createStore(storeName: String!, storeOwner: String!): Store
  }

  type Checkout {
    session: ID
  }
`;

module.exports = typeDefs;
