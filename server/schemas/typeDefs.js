const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    name: String!
    price: String!
    seller: String!
  }

  type Query {
    helloWorld: String
    products: [Product]
  }
`;

module.exports = typeDefs;
