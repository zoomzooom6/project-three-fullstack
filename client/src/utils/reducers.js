import { ADD_TO_CART } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [...action.products],
      };
    default:
      return state;
  }
};
