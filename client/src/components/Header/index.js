import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/IMG_0992.PNG'
import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
  <nav className="navbar is-success" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
    <a className="navbar-item">
    <img src={logo} width="112" height="28" class="navbar-logo"/>
    </a>
    <Link to="/">
          <h1>Let's Eat a Deal!</h1>
        </Link>

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
                        <hr class="navbar-divider"/>
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
                        <hr class="navbar-divider"/>
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
