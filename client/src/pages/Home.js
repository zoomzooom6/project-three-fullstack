import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QUERY_PRODUCTS } from "../utils/queries";
import { ADD_TO_CART } from "../utils/actions";
import { useQuery } from "@apollo/react-hooks";
// import { useLazyQuery } from "@apollo/client";

function Home() {
  const { data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      console.log("ITS WORKING NOW ");
    }
  }, [data]);

  return (
    <div>
      <h1>Products</h1>
      {data && (
        <div className="product-list">
          {data.products.map((item) => (
            <div className="product-card">
              <h1>{item.name}</h1>
              <h1>{item.description}</h1>
              <h1>{item.price}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
