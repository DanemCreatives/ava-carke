import cartActionTypes from "./cart.types";
import {
  cartItemCheck,
  cartSubtotalCalc,
  deleteItemFromCart,
} from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
  cartSubtotal: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: cartItemCheck(action.payload, state.cartItems),
        cartSubtotal: cartSubtotalCalc(state.cartItems),
      };
    case cartActionTypes.DELETE_ITEM:
      return {
        ...state,
        cartItems: deleteItemFromCart(action.payload, state.cartItems),
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
