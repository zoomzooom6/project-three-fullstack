import React from "react";
import strawberry from "../assets/images/foods/allec-gomes-xnRg3xDcNnE-unsplash.jpg";
import banana from "../assets/images/foods/charles-deluvio-0v_1TPz1uXw-unsplash.jpg";
import papaya from "../assets/images/foods/charles-deluvio-yPI38imbQSI-unsplash.jpg";
import lemon from "../assets/images/foods/lewis-fagg-Nl7eLS8E2Ss-unsplash.jpg";
import orange from "../assets/images/foods/mae-mu-U1iYwZ8Dx7k-unsplash.jpg";
import avocado from "../assets/images/foods/thought-catalog-9aOswReDKPo-unsplash.jpg";
import store from "../assets/images/store/artem-gavrysh-F6-U5fGAOik-unsplash.jpg";

const CustomerDashboard = () => {
  return (
  <main>
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

      <div class="tabs is-toggle is-fullwidth" id="tabs">
          <ul>
              <li class="is-active" data-tab="1">
                  <a>
                  <span class="icon is-small"><i class="fas fa-info"></i></span>
                  <span>Customer Information</span>
                  </a>
              </li>
              <li data-tab="2">
                  <a>
                  <span class="icon is-small"><i class="fas fa-file-invoice-dollar"></i></span>
                  <span>Recent Purchases</span>
                  </a>
              </li>
              <li data-tab="3">
                  <a>
                  <span class="icon is-small"><i class="fas fa-users"></i></span>
                  <span>Favorite Vendors</span>
                  </a>
              </li>
              <li data-tab="4">
                  <a>
                  <span class="icon is-small"><i class="fas fa-comment-alt"></i></span>
                  <span>Top Vendors</span>
                  </a>
              </li>
          </ul>
      </div>

      <div id="tab-content" class="box">
          <p class="is-active" data-content="1">
              <b>Name</b>: Lindsey Smith
              <br />
              <b>Email</b>: <a href="mailto:lindsey@gmail.com">lindsey@gmail.com</a>
              <br />
              <b>Address</b>: 1425 Uptown Street
              <br />
              <b>Phone Number</b>: 456-456-8787
          </p>
          <p data-content="2">
              <b>Recent Purchase Amount</b>: 10 Items
              <br />
              <b>Recent Purchase Cost</b>: $50
              <br />
              <b>Recent Purchase Items</b>: KitKat Chocolate Bar (x10)
              <br />
              <b>Checkouts Per Month</b>: 4
          </p>
          <p data-content="3">
              <b>Organic Veg Inc.</b>: 10 Items Purchased This Week
              <br />
              <b>EatFreak Inc.</b>: 2 Items Purchased Last Week
              <br />
              <b>I Love Eating Inc.</b>: 7 Items Purchased This Last
              <br />
          </p>
          <p data-content="4">
              <b>Organic Veg Inc.</b>
              <br />
              <b>EatFreak Inc.</b>
              <br />
              <b>I Love Eating Inc.</b>
              <br />
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
                          <p class="title is-4">John Smith</p>
                          <p class="subtitle is-6">@johnsmith</p>
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
                                  <a href="#" class="card-footer-item">Add</a>
                                  <a href="#" class="card-footer-item">Remove</a>
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
                          <p class="title is-4">John Smith</p>
                          <p class="subtitle is-6">@johnsmith</p>
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
                                  <a href="#" class="card-footer-item">Add</a>
                                  <a href="#" class="card-footer-item">Remove</a>
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
                          <p class="title is-4">John Smith</p>
                          <p class="subtitle is-6">@johnsmith</p>
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
                                  <a href="#" class="card-footer-item">Add</a>
                                  <a href="#" class="card-footer-item">Remove</a>
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
                          <p class="title is-4">John Smith</p>
                          <p class="subtitle is-6">@johnsmith</p>
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
                                  <a href="#" class="card-footer-item">Add</a>
                                  <a href="#" class="card-footer-item">Remove</a>
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
                          <p class="title is-4">John Smith</p>
                          <p class="subtitle is-6">@johnsmith</p>
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
                                  <a href="#" class="card-footer-item">Add</a>
                                  <a href="#" class="card-footer-item">Remove</a>
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
                          <p class="title is-4">John Smith</p>
                          <p class="subtitle is-6">@johnsmith</p>
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
                                  <a href="#" class="card-footer-item">Add</a>
                                  <a href="#" class="card-footer-item">Remove</a>
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
                          <p class="title is-4">John Smith</p>
                          <p class="subtitle is-6">@johnsmith</p>
                          </div>
                      </div>
          
                      <div class="content">
                          Pickup now!
                          <br /><br />
                          <div class="card">
                              <footer class="card-footer">
                                  <a href="#" class="card-footer-item">Select</a>
                              </footer>
                          </div>
                          <br />
                          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <br /><br />

      <h1 class="title is-1" id="help-desk">Customer Help Desk</h1>

      <form>
          <div class="field">
              <label class="label">Your Email</label>
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
              <label class="label">Vendor's Email</label>
              <div class="control has-icons-left has-icons-right">
              <input class="input is-danger" type="email" placeholder="Please enter the vendor's email" />
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
              <label class="label">Concern Message</label>
              <div class="control">
              <textarea class="textarea" placeholder="Please enter your concern(s)"></textarea>
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

export default CustomerDashboard;
