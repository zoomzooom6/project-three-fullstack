import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { ADD_TO_CART } from "../../utils/actions";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { loading, data } = useQuery(QUERY_PRODUCTS);
  console.log(data);
  const { cart } = state;

  // const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      product: data.products[0].name,
    });
  };

  return (
    <div>
      <h1>Testing</h1>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Cart;
