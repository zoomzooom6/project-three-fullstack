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

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
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
                    
                </div>
                </div>
            </div>
    </nav>
  );
};

export default Header;
