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
            <a class="navbar-item" href="https://bulma.io">
                <img src="./images/IMG_0992.PNG" width="112" height="28" class="navbar-logo" />
            </a>
      
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="#">
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

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Orders
                    </a>
            
                    <div class="navbar-dropdown">
                        <a class="navbar-item button" href="#" disabled>
                        Orders Recieved
                        </a>
                        <a class="navbar-item button" href="#" disabled>
                        Orders Shipped
                        </a>
                        <hr class="navbar-divider" />
                        <a class="navbar-item button" href="#" disabled>
                        Submit a Vendor Review
                        </a>
                    </div>
                </div>
        
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Account
                    </a>
                    
                    <div class="navbar-dropdown">
                        <a class="navbar-item button" href="#" disabled>
                        Update Your Information
                        </a>                        
                        <a class="navbar-item button" href="#" disabled>
                        Settings & Privacy
                        </a>
                        <a class="navbar-item button" href="#" disabled>
                        Help & Support
                        </a>
                        <a class="navbar-item button" href="#" disabled>
                        Display & Accessibility
                        </a>
                        <hr class="navbar-divider" />
                        <a class="navbar-item button" href="#" disabled>
                        Provide Feedback
                        </a>
                    </div>
                </div>
            </div>
        
            <div class="navbar-end">
                <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-info" href="#">
                    <strong>Signup</strong>
                    </a>
                    <a class="button is-light" href="#">
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
