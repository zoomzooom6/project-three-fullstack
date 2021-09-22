import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Testing</h1>
    </div>
  );
}

export default Cart;
