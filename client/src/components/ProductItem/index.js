import React from "react";
import { pluralize } from "../../utils/helpers"
import { addCart, updateCartQuantity } from "../../app/actions/actions";
import { idbPromise } from '../../utils/helpers';
import { useSelector, useDispatch } from 'react-redux';

function ProductItem(item) {
    const {
        image,
        name,
        _id,
        price,
        quantity
    } = item;

    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state);

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id)
        if (itemInCart) {
            dispatch(updateCartQuantity(_id, itemInCart.purchaseQuantity + 1));
        } else {
            dispatch(addCart(item));
            idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
    }

    return (
        <div className="card column is-one-quarter">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={`/assets/images/${image}`} alt={name} />
                </figure>
            </div>            
            <div className="content">
                <b>{name}</b>
                <span>${price}</span>
                <div>{quantity} {pluralize("item", quantity)} in stock</div>
            </div>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    );
}

export default ProductItem;