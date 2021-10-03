import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { QUERY_PRODUCTS } from "../utils/queries";
import { ADD_TO_CART, UPDATE_PRODUCTS } from "../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import strawberry from "../assets/images/foods/allec-gomes-xnRg3xDcNnE-unsplash.jpg";
import banana from "../assets/images/foods/charles-deluvio-0v_1TPz1uXw-unsplash.jpg";
import papaya from "../assets/images/foods/charles-deluvio-yPI38imbQSI-unsplash.jpg";
import lemon from "../assets/images/foods/lewis-fagg-Nl7eLS8E2Ss-unsplash.jpg";
import orange from "../assets/images/foods/mae-mu-U1iYwZ8Dx7k-unsplash.jpg";
import avocado from "../assets/images/foods/thought-catalog-9aOswReDKPo-unsplash.jpg";
import store from "../assets/images/store/artem-gavrysh-F6-U5fGAOik-unsplash.jpg";

function Home() {
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const dispatch = useDispatch();

  const addToCart = (id) => {
    dispatch({
      type: ADD_TO_CART,
      product: data.products.filter((item) => {
        return item._id === id;
      }),
    });
  };

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });
    } else if (!loading) {
      console.log("you are currently offline");
    }
  }, [loading, data, dispatch])

  console.log(data);

  return (
    <div className="center-children-vertical">
      <h1 className="larger-font">Checkout Out Discounted Local Products Below!</h1>
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
                                <a href="#" class="card-footer-item">Buy</a>
                                
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
                                <a href="#" class="card-footer-item">Buy</a>
                                
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
                                <a href="#" class="card-footer-item">Buy</a>
                                
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
                                <a href="#" class="card-footer-item">Buy</a>
                                
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
                                <a href="#" class="card-footer-item">Buy</a>
                                
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
                                <a href="#" class="card-footer-item">Buy</a>
                                
                            </footer>
                        </div>
                        <br />
                        <time datetime="2021-1-1">11:09 PM - 1 Jan 2021</time>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {data && (
        <div className="product-list">
          {data.products.map((item) => (
            <div className="product-card flex" key={item._id}>
              <img src={`/images/${item.image}`} className="margin-top-0" alt={"picture of " + item.name}/>
              <h1 className="text-align">{item.name}</h1>
              <h1 className="text-align">{item.description}</h1>
              <h1 className="text-align">Price: ${item.price}</h1>
              <h1 className="text-align">Quantity in stock: {item.quantity}</h1>
              <button onClick={() => addToCart(item._id)}>Add To Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
