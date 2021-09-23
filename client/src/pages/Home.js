import React from "react";
import { useDispatch } from "react-redux";
import { QUERY_PRODUCTS } from "../utils/queries";
import { ADD_TO_CART } from "../utils/actions";
import { useQuery } from "@apollo/react-hooks";

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
    <div>
      <h1>Products</h1>
      {data && (
        <div className="product-list">
          {data.products.map((item) => (
            <div className="product-card" key={item._id}>
              <img src={item.image} />
              <h1>{item.name}</h1>
              <h1>{item.description}</h1>
              <h1>{item.price}</h1>
              <button onClick={() => addToCart(item._id)}>Add To Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
