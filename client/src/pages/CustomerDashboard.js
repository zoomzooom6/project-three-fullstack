import React from "react";
import store from "../assets/images/store/artem-gavrysh-F6-U5fGAOik-unsplash.jpg";

const CustomerDashboard = () => {
  return (
    <main>
      <div className="tabs is-toggle is-fullwidth" id="tabs">
        <ul>
          <li className="is-active" data-tab="1">
            <a href="google.ca">
              <span className="icon is-small">
                <i className="fas fa-info"></i>
              </span>
              <span>Customer Information</span>
            </a>
          </li>
          <li data-tab="2">
            <a href="google.ca">
              <span className="icon is-small">
                <i className="fas fa-file-invoice-dollar"></i>
              </span>
              <span>Recent Purchases</span>
            </a>
          </li>
          <li data-tab="3">
            <a href="google.ca">
              <span className="icon is-small">
                <i className="fas fa-users"></i>
              </span>
              <span>Favorite Vendors</span>
            </a>
          </li>
          <li data-tab="4">
            <a href="google.ca">
              <span className="icon is-small">
                <i className="fas fa-comment-alt"></i>
              </span>
              <span>Top Vendors</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="columns">
          <div className="card column is-one-quarter">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={store} alt="Store" />
              </figure>
            </div>

            <div className="card-content">
              <div className="content">
                Pickup now!
                <br />
                <br />
                <div className="card">
                  <footer className="card-footer">
                    <a href="google.ca" className="card-footer-item">
                      Select
                    </a>
                  </footer>
                </div>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <h1 className="title is-1" id="help-desk">
        Customer Help Desk
      </h1>

      <form>
        <div className="field">
          <label className="label">Your Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-danger"
              type="email"
              placeholder="Please enter your email"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p className="help is-danger">This email is invalid</p>
        </div>

        <div className="field">
          <label className="label">Vendor's Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-danger"
              type="email"
              placeholder="Please enter the vendor's email"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p className="help is-danger">This email is invalid</p>
        </div>

        <div className="field">
          <label className="label">Email Subject</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Please enter the email's subject"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Concern Message</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Please enter your concern(s)"
            ></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default CustomerDashboard;
