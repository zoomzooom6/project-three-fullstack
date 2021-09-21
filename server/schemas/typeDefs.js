const { gql } = require('apollo-server-express');

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
        name: String
        price: Int
        description: String
        quantity: Int
        category: Category
    }

    type Store {
        storeId: ID
        storeName: String,
        storeOwner: User
        products: [Product]
    }

    type Query {
        helloWorld: String
        sushi: String
        categories: [Category]
        user: User
        products(category: ID, name: String): [Product]
        product(_id: ID!): Product
        checkout(products: [ID]!): Checkout
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!, account: String!, store: ID): User
        updateUser(username: String, email: String, password: String, store: ID): User
        login(email: String!, password: String!): User
        addProduct(name: String!, price: Int!, description: String, quantity: Int, category: String!, store: String!): Product
        updateProduct(name: String, price: Int, description: String, quantity: Int, category: String!, store: String!): Product
        createStore(storeName: String!, storeOwner: String!): Store
    }

    type Checkout {
        session: ID
    }
`;

module.exports = typeDefs;