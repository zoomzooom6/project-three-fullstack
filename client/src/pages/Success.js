import React, { useEffect } from "react";
import { ADD_ORDER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { idbPromise } from '../utils/helpers';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map(item => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }
    }
    setTimeout(function () { window.location.assign('/') }, 3000);
    saveOrder();
  }, [addOrder]);

  return (
    <div className="center-children-vertical">
      <div className="center-children-vertical margin-top">
        <h1 className="larger-font">Success!</h1>
        <h2 className="large-font">Thank you for your purchase!</h2>
        <h2 className="large-font">
          You will now be redirected to the homepage.
        </h2>
      </div>
    </div>
  );
}

export default Success;
