import {
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART
} from "./actions";

const initialState = {
  cart: [],
  products: [],
  categories: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    case UPDATE_PRODUCTS:
      console.log(action);
      return {
        ...state,
        products: [...action.products || []]
      };
    case UPDATE_CATEGORIES:
      console.log(action);
      return {
        ...state,
        categories: [...action.categories || []]
      };
    case ADD_MULTIPLE_TO_CART:
      console.log(action);
      return {
        ...state,
        cart: [...state.cart, ...action.items || []],
      };
    case REMOVE_FROM_CART:
      console.log(action);
      let newState = state.cart.filter(product => {
        console.log(product);
        return product._id !== action.item;
      });
      return {
        ...state,
        cart: newState
      };
    case UPDATE_CART_QUANTITY:
      console.log(action);
      return {
        ...state,
        cart: state.cart.map(product => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        })
      };
    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };
    default:
      return state;
  }
};
