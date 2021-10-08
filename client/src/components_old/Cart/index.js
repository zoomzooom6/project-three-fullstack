import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { QUERY_CHECKOUT, QUERY_PRODUCTS } from "../../utils/queries";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { ADD_TO_CART } from "../../utils/actions";

function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { data } = useQuery(QUERY_PRODUCTS);

  // const [getCheckout, { checkoutData }] = useLazyQuery(QUERY_CHECKOUT);
  // console.log(data);

  // useEffect(() => {
  //   console.log("working");
  // }, [checkoutData]);

  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      product: data,
    });
  };

  // const checkout = () => {
  //   const productIds = [];

  //   state.cart[0].products.forEach((item) => {
  //     productIds.push(item.id);
  //   });
  //   console.log(productIds);
  //   console.log(data);

  //   // getCheckout({
  //   //   variables: { products: ["614a6da4d473c64e7385683e"] },
  //   // });

  //   console.log(checkoutData);
  //   // stripePromise.then((res) => {
  //   //   res.redirectToCheckout({ sessionId: checkoutData.checkout.session });
  //   // });
  // };

  return (
    <div>
      <h1>Testing</h1>
      <button onClick={addToCart}>Add to cart</button>
      {/* <button onClick={checkout}>Checkout</button> */}
    </div>
  );
}

export default Cart;
