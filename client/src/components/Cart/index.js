import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/react-hooks";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      productIds.push(item);
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  return (
    <div>
      <h1>Testing</h1>
      <button onClick={submitCheckout}>Add</button>
    </div>
  );
}

export default Cart;
