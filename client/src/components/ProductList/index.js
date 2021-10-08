import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import ProductItem from '../ProductItem';
import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
import { updateProducts } from '../../app/actions/actions';
import { idbPromise } from '../../utils/helpers';
import { useSelector, useDispatch } from 'react-redux';

const ProductList = () => {
    const dispatch = useDispatch();
    const { currentCategory, products } = useSelector((state) => state);

    const { loading, data } = useQuery(QUERY_PRODUCTS);

    useEffect(() => {
        if (data) {
            dispatch(updateProducts(data.products));
            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        } else if (!loading) {
            // since we're offline, get all of the data from the `products` store
            idbPromise('products', 'get').then((products) => {
                // use retrieved data to set global state for offline browsing
                dispatch(updateProducts(products));
            });
        }
    }, [loading, data, dispatch]);

    function filterProducts() {
        if (!currentCategory) {
            return data.products;
        }

        return data.products.filter(product => product.category._id === currentCategory);
    }

    return (
        <div className="center-children-vertical">
            <h1 className="larger-font">Checkout our discounted local products below!</h1>
            <div className="columns">
                {products.length ? (
                    <div className="flex-row">
                        {filterProducts().map((product) => (
                            <ProductItem
                                key={product._id}
                                _id={product._id}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                quantity={product.quantity}
                            />
                        ))}
                    </div>
                ) : (
                    <h3>You haven't added any products yet!</h3>
                )}
                {loading ? <img src={spinner} alt="loading" /> : null}
            </div>
        </div>
    )
}

export default ProductList;