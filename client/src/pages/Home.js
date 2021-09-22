import React from "react";
import { useDispatch } from "react-redux";
import { QUERY_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/react-hooks";
import { ADD_TO_CART } from "../utils/actions";

function Home() {
  const dispatch = useDispatch();

  const { data } = useQuery(QUERY_PRODUCTS);

  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      product: data,
    });
  };

  return (
    <div>
      <h1>Testing</h1>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Home;
