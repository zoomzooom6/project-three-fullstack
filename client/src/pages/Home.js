import React from "react";
import { useDispatch } from "react-redux";
import { QUERY_PRODUCTS } from "../utils/queries";
import { ADD_TO_CART } from "../utils/actions";
import { useQuery } from "@apollo/react-hooks";

import "bulma/css/bulma.min.css";

function Home() {
  const { data } = useQuery(QUERY_PRODUCTS);

  const dispatch = useDispatch();

  const addToCart = (id) => {
    dispatch({
      type: ADD_TO_CART,
      product: data.products.filter((item) => {
        return item._id === id;
      }),
    });
  };

  console.log(data);

  return (
    <div className="center-children-vertical">
      <h1 className="larger-font">Products</h1>
      {data && (
        <div className="columns is-centered is-flex-wrap-wrap ">
          {data.products.map((item) => (
            <div
              className="column is-one-third-desktop is-one-quarter-tablet"
              key={item._id}
            >
              <img src={item.image} className="margin-top-0" alt={item.name} />
              <h1 className="text-align">{item.name}</h1>
              <h1 className="text-align">{item.description}</h1>
              <h1 className="text-align">{item.price}</h1>
              <div className="is-flex-wrap-wrap ">
                <button
                  className="button is-primary button-center"
                  onClick={() => addToCart(item._id)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
