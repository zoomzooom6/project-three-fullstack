import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { QUERY_PRODUCTS } from "../utils/queries";
import { ADD_TO_CART, UPDATE_PRODUCTS } from "../utils/actions";
import { useQuery } from "@apollo/react-hooks";

function Home() {
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const dispatch = useDispatch();

  const addToCart = (id) => {
    dispatch({
      type: ADD_TO_CART,
      product: data.products.filter((item) => {
        return item._id === id;
      }),
    });
  };

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });
    } else if (!loading) {
      console.log("you are currently offline");
    }
  }, [loading, data, dispatch])

  console.log({data});

  return (
    <div className="center-children-vertical">
      <h1 className="larger-font">Products</h1>
      {data && (
        <div className="product-list">
          {data.products.map((item) => (
            <div className="product-card flex" key={item._id}>
              <img src={`/images/${item.image}`} className="margin-top-0" alt={"picture of " + item.name}/>
              <h1 className="text-align">{item.name}</h1>
              <h1 className="text-align">{item.description}</h1>
              <h1 className="text-align">Price: ${item.price}</h1>
              <h1 className="text-align">Quantity in stock: {item.quantity}</h1>
              <button onClick={() => addToCart(item._id)}>Add To Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
