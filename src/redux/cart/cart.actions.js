import CartActionTypes from "./cart.types";

export const toggleCartHidden = (value) => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  payload: value,
});

export const addItemToCart = (value) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: value,
});

export const deleteProductFromCart = (value) => ({
  type: CartActionTypes.DELETE_PRODUCT_FROM_CART,
  payload: value,
});
