import CartActionTypes from "./cart.types";
import { applyCartQuantity, deleteProductItem } from "./cart.utils";

const INITIAL_STATE = {
  toggleCartValue: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        toggleCartValue: action.payload,
      };
    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: applyCartQuantity(state.cartItems, action.payload),
      };
    case CartActionTypes.DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartItems: deleteProductItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
