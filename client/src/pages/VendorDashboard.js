import React from 'react';
import '../../src/index';
import 'bulma/css/bulma.min.css';


const vendorDashboard = () => {

    const handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the new ad.')
      }
     
      
    return (
      
            <main>
              <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class='is-justify-content-space-evenly'>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  
               <a class="navbar-item" href="#">
                    Home
                  </a>
                 
        
                 <a class="navbar-item" href="#orders-received">
                    Orders Received
                  </a>
        
                   <a class="navbar-item" href="#orders-shipped">
                    Orders Shipped
                  </a>
        
                  <a id= 'new-ad' class="navbar-item" href="#new-ad">
                   Post A New Ad
                  </a>

                  <a class="navbar-item" href="#reviews">
                   Customer Reviews
                  </a>
                 
                
                <div class="navbar-end">
                </div>
                
</nav>

                  
                 
     <div class="box">
      <h1 class=''>Post A New Ad</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Product Name</p>
            <input name="product name" />
          </label>
          <label>
            <p>Product Description</p>
            <textarea class="textarea"></textarea>
          </label>
          <label>
            <p>Price</p>
            <input type="text" />
          </label>
          <p>Product Image</p>
          <div class="file">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label">
        Choose a file…
      </span>
    </span>
  </label>
</div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
    <br></br>



   

<div className="tabs is-toggle is-fullwidth" id="tabs">
        <ul>
          <li className="is-active" data-tab="1">
            <a href="">
              <span className="icon is-small">
                <i className="fas fa-info"></i>
              </span>
              <span id='home'>Home</span>
            </a>
          </li>
          <li data-tab="2">
            <a href="">
              <span className="icon is-small">
                <i className="fas fa-file-invoice-dollar"></i>
              </span>
              <span id='orders-received'>Orders Received</span>
             
            </a>
          </li>
          <li data-tab="3">
            <a href="">
              <span className="icon is-small">
                <i className="fas fa-users"></i>
              </span>
              <span id='orders-shipped'>Orders Shipped</span>
            </a>
          </li>
          <li data-tab="4">
            <a href="">
              <span className="icon is-small">
                
              </span>
             
            </a>
          </li>
        </ul>
      </div>




<footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Let's Eat A Deal</strong> . 
    </p>
  </div>
</footer>
 </main>
          );
        };
export default vendorDashboard;