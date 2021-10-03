import React from "react";
import {Helmet} from "react-helmet";
import strawberry from "../assets/images/foods/allec-gomes-xnRg3xDcNnE-unsplash.jpg";
import banana from "../assets/images/foods/charles-deluvio-0v_1TPz1uXw-unsplash.jpg";
import papaya from "../assets/images/foods/charles-deluvio-yPI38imbQSI-unsplash.jpg";
import lemon from "../assets/images/foods/lewis-fagg-Nl7eLS8E2Ss-unsplash.jpg";
import orange from "../assets/images/foods/mae-mu-U1iYwZ8Dx7k-unsplash.jpg";
import avocado from "../assets/images/foods/thought-catalog-9aOswReDKPo-unsplash.jpg";
import store from "../assets/images/store/artem-gavrysh-F6-U5fGAOik-unsplash.jpg";
import customer1 from "../assets/images/customers/gemma-chua-tran-iCTcQqTXaCw-unsplash.jpg";
import customer2 from "../assets/images/customers/iam_os-FrU6VeUe0YM-unsplash.jpg";
import script from "../assets/js/script.js";

const VendorDashboard = () => {
  return (
    <main>
      <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">        
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
                        Customer Reviews
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

                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-light" href="#add-product">
                            Add Product
                            </a>
                            <a class="button is-light" href="#add-service">
                            Add Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <div class="tabs is-toggle is-fullwidth" id="tabs">
        <ul>
            <li class="is-active" data-tab="1">
                <a>
                <span class="icon is-small"><i class="fas fa-info"></i></span>
                <span>Vendor Information</span>
                </a>
            </li>
            <li data-tab="2">
                <a>
                <span class="icon is-small"><i class="fas fa-file-invoice-dollar"></i></span>
                <span>Sales</span>
                </a>
            </li>
            <li data-tab="3">
                <a>
                <span class="icon is-small"><i class="fas fa-users"></i></span>
                <span>Top Customers</span>
                </a>
            </li>
            <li data-tab="4">
                <a>
                <span class="icon is-small"><i class="fas fa-comment-alt"></i></span>
                <span>Most Frequent Customer Feedback</span>
                </a>
            </li>
        </ul>
    </div>

    <div id="tab-content" class="box">
        <p class="is-active" data-content="1">
            <b>Name</b>: Organic Veg Inc.
            <br />
            <b>Number of Employees</b>: 100
            <br />
            <b>Number of Customers</b>: 1000
            <br />
            <b>Address</b>: 1234 Main Street
        </p>
        <p data-content="2">
            <b>Today's Sales</b>: 5,000 Items
            <br />
            <b>Average Daily Sales</b>: 15,000 Items
            <br />
            <b>Today's Revenue</b>: $10,000
            <br />
            <b>Average Daily Revenue</b>: $30,000
        </p>
        <p data-content="3">
        <b>Brad</b>: <a href="mailto:brad@gmail.com">brad@gmail.com</a> | 100 Items Purchased This Week
        <br />
        <b>Susan</b>: <a href="mailto:susan@gmail.com">susan@gmail.com</a> | 99 Items Purchased This Week
        <br />
        <b>Tom</b>: <a href="mailto:tom@gmail.com">tom@gmail.com</a> | 98 Items Purchased This Week
        <br />
        </p>
        <p data-content="4">
        "Is home delivery possible?" - 500 Customers
        </p>
    </div>

    <br />

    <h1 class="title is-1" id="products">Products</h1>

    <br />

    <div class="container">
        <div class="columns">
        <div class="card column is-one-quarter">
                  <div class="card-image">
                      <figure class="image is-4by3">
                          <img src={strawberry} alt="Strawberry" />
                      </figure>
                  </div>
          
                  <div class="card-content">
                      <div class="media">
                          <div class="media-left">
                          
                          </div>
                          <div class="media-content">
                          
                          </div>
                      </div>
          
                      <div class="content">
                          <b>Item</b>: Strawberry
                          <br />
                          <b>Price</b>: $0.99
                          <br />
                          <b>Expiry Date</b>: 2021-10-26
                          <br /><br />
                          <div class="card">
                              <footer class="card-footer">
                              <a href="#" class="card-footer-item">Edit</a>
                              <a href="#" class="card-footer-item">Delete</a>
                              </footer>
                          </div>
                          <br />
                          <time datetime="2021-1-1">11:09 PM - 1 Jan 2021</time>
                      </div>
                  </div>
              </div>


        
            <div class="card column is-one-quarter">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={banana} alt="Banana" />
                    </figure>
                </div>
        
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">

                        </div>
                        <div class="media-content">
                        
                        </div>
                    </div>
        
                    <div class="content">
                        <b>Item</b>: Banana
                        <br />
                        <b>Price</b>: $1.99
                        <br />
                        <b>Expiry Date</b>: 2021-10-26
                        <br /><br />
                        <div class="card">
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item">Edit</a>
                                <a href="#" class="card-footer-item">Delete</a>
                            </footer>
                        </div>
                        <br />
                        <time datetime="2021-1-1">11:09 PM - 1 Jan 2021</time>
                    </div>
                </div>
            </div>
        
            <div class="card column is-one-quarter">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={papaya} alt="Papaya" />
                    </figure>
                </div>
        
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">

                        </div>
                        <div class="media-content">
                        
                        </div>
                    </div>
        
                    <div class="content">
                        <b>Item</b>: Papaya
                        <br />
                        <b>Price</b>: $2.99
                        <br />
                        <b>Expiry Date</b>: 2021-10-26
                        <br /><br />
                        <div class="card">
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item">Edit</a>
                                <a href="#" class="card-footer-item">Delete</a>
                            </footer>
                        </div>
                        <br />
                        <time datetime="2021-1-1">11:09 PM - 1 Jan 2021</time>
                    </div>
                </div>
            </div>

            <div class="card column is-one-quarter">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={lemon} alt="Lemon" />
                    </figure>
                </div>
        
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">

                        </div>
                        <div class="media-content">
                        
                        </div>
                    </div>
        
                    <div class="content">
                        <b>Item</b>: Lemon
                        <br />
                        <b>Price</b>: $1.99
                        <br />
                        <b>Expiry Date</b>: 2021-10-26
                        <br /><br />
                        <div class="card">
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item">Edit</a>
                                <a href="#" class="card-footer-item">Delete</a>
                            </footer>
                        </div>
                        <br />
                        <time datetime="2021-1-1">11:09 PM - 1 Jan 2021</time>
                    </div>
                </div>
            </div>
        </div>

        <div class="columns">
            <div class="card column is-one-quarter">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={orange} alt="Orange" />
                    </figure>
                </div>
        
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">

                        </div>
                        <div class="media-content">
                        
                        </div>
                    </div>
        
                    <div class="content">
                        <b>Item</b>: Orange
                        <br />
                        <b>Price</b>: $0.99
                        <br />
                        <b>Expiry Date</b>: 2021-10-26
                        <br /><br />
                        <div class="card">
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item">Edit</a>
                                <a href="#" class="card-footer-item">Delete</a>
                            </footer>
                        </div>
                        <br />
                        <time datetime="2021-1-1">11:09 PM - 1 Jan 2021</time>
                    </div>
                </div>
            </div>
        
            <div class="card column is-one-quarter">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={avocado} alt="Avocado" />
                    </figure>
                </div>
        
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">

                        </div>
                        <div class="media-content">
                        
                        </div>
                    </div>
        
                    <div class="content">
                        <b>Item</b>: Avocado
                        <br />
                        <b>Price</b>: $2.99
                        <br />
                        <b>Expiry Date</b>: 2021-10-26
                        <br /><br />
                        <div class="card">
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item">Edit</a>
                                <a href="#" class="card-footer-item">Delete</a>
                            </footer>
                        </div>
                        <br />
                        <time datetime="2021-1-1">11:09 PM - 1 Jan 2021</time>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br /><br />

    <h1 class="title is-1" id="add-product"> Add Product</h1>

    <form>
        <div class="field">
            <label class="label">Item</label>
            <div class="control">
            <input class="input" type="text" placeholder="Please enter the item's name" />
            </div>
        </div>
        
        <div class="field">
            <label class="label">Additional Information</label>
            <div class="control">
            <textarea class="textarea" placeholder="Please provide additional information about the item for the customer"></textarea>
            </div>
        </div>

        <div class="field">
            <label class="label">Price Per Unit</label>
            <div class="control">
            <input class="input" type="number" placeholder="Please enter the item's price" />
            </div>
        </div>

        <div class="field">
            <label class="label">Quantity</label>
            <div class="control">
            <input class="input" type="number" placeholder="Please enter the number of items in stock" />
            </div>
        </div>

        <div class="field">
            <label class="label">Expiry Date</label>
            <div class="control">
            <input class="input" type="date" value="2021-02-26" />
            </div>
        </div>

        <br />

        <div class="file has-name">
            <label class="file-label">
              <input class="file-input" type="file" name="resume" />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                  Choose an image file…
                </span>
              </span>
              <span class="file-name">
                image.png
              </span>
            </label>
        </div>

        <br />
                
        <div class="field is-grouped">
            <div class="control">
            <button class="button is-link">Submit</button>
            </div>
        </div>
    </form>

    <h1 class="title is-1" id="services">Services</h1>

    <br />

    <div class="container">
        <div class="columns">
            <div class="card column is-one-quarter">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={store} alt="Store" />
                    </figure>
                </div>
        
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">

                        </div>
                        <div class="media-content">
                        
                        </div>
                    </div>
        
                    <div class="content">
                        Pickup now!
                        <br /><br />
                        <div class="card">
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item">Edit</a>
                                <a href="#" class="card-footer-item">Delete</a>
                            </footer>
                        </div>
                        <br />
                        <time datetime="2021-1-1">11:09 PM - 1 Jan 2021</time>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br /><br />

    <h1 class="title is-1" id="add-service"> Add Service</h1>

    <form>
        <div class="field">
            <label class="label">Service</label>
            <div class="control">
            <input class="input" type="text" placeholder="Please enter the service's name" />
            </div>
        </div>
        
        <div class="field">
            <label class="label">Additional Information</label>
            <div class="control">
            <textarea class="textarea" placeholder="Please provide additional information about the service for the customer"></textarea>
            </div>
        </div>

        <div class="field">
            <label class="label">Expiry Date</label>
            <div class="control">
            <input class="input" type="date" value="2021-02-26" />
            </div>
        </div>

        <br />

        <div class="file has-name">
            <label class="file-label">
              <input class="file-input" type="file" name="resume" />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                  Choose an image file…
                </span>
              </span>
              <span class="file-name">
                image.png
              </span>
            </label>
        </div>

        <br />
                
        <div class="field is-grouped">
            <div class="control">
            <button class="button is-link">Submit</button>
            </div>
        </div>
    </form>

    <h1 class="title is-1" id="help-desk">Customer Concerns</h1>

    <br />

    <div class="container">
        <div class="columns">
            <div class="card column is-one-quarter">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={customer1} alt="Customer" />
                    </figure>
                </div>
        
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">

                        </div>
                        <div class="media-content">
                        
                        </div>
                    </div>
        
                    <div class="content">
                        Is there an option for delivery?
                        <br />
                        <b>Name</b>: John
                        <br />
                        <b>Email</b>: <a href="mailto:john@gmail.com"> john@gmail.com</a>
                        <br /><br />
                        <div class="card">
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item">Save</a>
                                <a href="#" class="card-footer-item">Delete</a>
                            </footer>
                        </div>
                        <br />
                        <time datetime="2021-1-1">11:09 PM - 1 Jan 2021</time>
                    </div>
                </div>
            </div>

            <div class="card column is-one-quarter">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={customer2} alt="Customer" />
                    </figure>
                </div>
        
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">

                        </div>
                        <div class="media-content">
                        
                        </div>
                    </div>
        
                    <div class="content">
                        Do you have more bananas in stock?
                        <br />
                        <b>Name</b>: Caroline
                        <br />
                        <b>Email</b>: <a href="mailto:caroline@gmail.com"> caroline@gmail.com</a>
                        <br /><br />
                        <div class="card">
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item">Save</a>
                                <a href="#" class="card-footer-item">Delete</a>
                            </footer>
                        </div>
                        <br />
                        <time datetime="2021-1-1">11:09 PM - 1 Jan 2021</time>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br /><br />

    <h1 class="title is-1" id="help-desk">Customer Help Desk</h1>

    <form>
        <div class="field">
            <label class="label">Employee's Email</label>
            <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="email" placeholder="Please enter your email" />
            <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
            </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
        </div>
        
        <div class="field">
            <label class="label">Customer's Email</label>
            <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="email" placeholder="Please enter the customer's email" />
            <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
            </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
        </div>
        
        <div class="field">
            <label class="label">Email Subject</label>
            <div class="control">
            <input class="input" type="text" placeholder="Please enter the email's subject" />
            </div>
        </div>
        
        <div class="field">
            <label class="label">Concern Resolution Message</label>
            <div class="control">
            <textarea class="textarea" placeholder="Please enter the resolution of the customer's concern(s)"></textarea>
            </div>
        </div>
                
        <div class="field is-grouped">
            <div class="control">
            <button class="button is-link">Submit</button>
            </div>
        </div>
    </form>
  </main>
  );
};

export default VendorDashboard;
