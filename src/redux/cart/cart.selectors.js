import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

// Selects the items currently in the cart
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// Selects the item quantity of the cart
export const selectCartQuantity = createSelector([selectCart], (cart) => {
  return cart.cartItems.reduce(
    (previous, current) => current.quantity + previous,
    0
  );
});

// Selects the total price of the cart
export const selectCartTotal = createSelector([selectCart], (cart) => {
  return cart.cartItems.reduce(
    (previous, current) => current.product_price * current.quantity + previous,
    0
  );
});

// Selects the cart dropdown show/hide status
export const selectToggleCartValue = createSelector(
  [selectCart],
  (cart) => cart.toggleCartValue
);
