import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ product }) => {
    return (
        <div className="container">
            <div className="content">
                <b>Item</b>: {ProductName}
                <br/>
                <b>Price</b>: {price}
                <br/>
                <b>Expiry Date</b>: {postedAt}
                <br/><br/>
                <div className="card">
                    <footer className="card-footer">
                        <a href="#" className="card-footer-item">Add</a>
                        <a href="#" className="card-footer-item">Remove</a>
                    </footer>
                 </div>
                    <br/>
                    <time datetime="2021-1-1">11:09 PM - 1 Jan 2021</time>
                
            </div>
        </div>
    );
};

export default ProductList;

