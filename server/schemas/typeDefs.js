const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    name: String!
    id: ID!
    price: String!
    seller: String!
  }

  type Checkout {
    sessions: ID!
  }

  type Query {
    helloWorld: String
    products: [Product]
    checkout(products: [ID]!): Checkout
  }
`;

module.exports = typeDefs;
