import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/IMG_0992.PNG";
import Auth from "../../utils/auth";
import { useSelector } from "react-redux";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const state = useSelector((state) => state);

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  console.log(data);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const checkout = () => {
    const productIds = [];

    state.cart.forEach((item) => {
      item.forEach((product) => {
        productIds.push(product._id);
      });
    });

    // state.cart[0].products.forEach((item) => {
    //   if (item.id !== null) {
    //     productIds.push(item.id);
    //   }
    // });
    console.log(productIds);

    getCheckout({
      variables: { products: productIds },
    });
  };

  return (
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://lets-eat-a-deal.herokuapp.com/">
                <img src={logo} width="112" height="28" class="navbar-logo" />
            </a>
      
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="https://lets-eat-a-deal.herokuapp.com/">
                Home
                </a>
        
                <a class="navbar-item" href="#products">
                Local Products
                </a>

                <a class="navbar-item" href="#services">
                Local Services
                </a>

                <a class="navbar-item" href="#help-desk">
                Help Desk
                </a>
            </div>
        
            <div class="navbar-end">
                <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-info" href="/signup">
                    <strong>Signup</strong>
                    </a>
                    <a class="button is-light" href="/login">
                    Login
                    </a>
                    <a class="button is-warning" href="#">
                    Checkout
                    </a>
                </div>
                </div>
            </div>
        </div>
      </nav>
  );
};

export default Header;
