import {
    ADD_TO_CART,
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART
} from "./types";

export const updateProducts = (products) => {
    return {type: UPDATE_PRODUCTS, products}
}

export const updateCategories = (categories) => {
    return {type: UPDATE_CATEGORIES, categories}
}

export const addCart = (item) => {
    return {type: ADD_TO_CART, item}
}

export const addMultipleToCart = (items) => {
    return {type: ADD_MULTIPLE_TO_CART, items}
}

export const removeCart = (item) => {
    return {type: REMOVE_FROM_CART, item}
}

export const updateCartQuantity = (_id, purchaseQuantity) => {
    return {type: UPDATE_CART_QUANTITY, _id, purchaseQuantity}
}

export const clearCart = () => {
    return {type: CLEAR_CART}
}