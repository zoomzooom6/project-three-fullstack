import gql from "graphql-tag";

export const QUERY_CHECKOUT = gql`
  query checkout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query {
    products {
      name
      _id
      price
      description
    }
  }
`;
