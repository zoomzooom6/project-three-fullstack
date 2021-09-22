import gql from "graphql-tag";

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query {
    products {
      id
      name
      description
      price
    }
  }
`;
