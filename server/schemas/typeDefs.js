const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    name: String!
    id: ID!
    price: String!
    seller: String!
    description: String!
  }

  type Checkout {
    session: ID!
  }

  type Query {
    helloWorld: String
    products: [Product]
    product(productId: ID!): Product
    checkout(products: [ID]!): Checkout
  }
`;

module.exports = typeDefs;
