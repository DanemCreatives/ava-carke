import cartActionTypes from "./cart.types";

export const addToCart = (cart) => ({
  type: cartActionTypes.ADD_TO_CART,
  payload: cart,
});

export const deleteItem = (item) => ({
  type: cartActionTypes.DELETE_ITEM,
  payload: item,
});
