/////////////////////////////////
// *** APPLY CART QUANTITY *** //
////////////////////////////////
export const applyCartQuantity = (cartItems, payload) => {
  // See if any cart items matches the payload
  const existingCartItem = cartItems.find((value) => value.id === payload.id);
  // If a single cart item matches payload
  if (existingCartItem) {
    // return the cart items
    return cartItems.map((value) => {
      // determine the value of updatedQuantity based on if the payload exists with the
      // updatedQuantity property being passed in or not
      const updatedQuantity =
        payload.updatedQuantity == null
          ? value.quantity + 1
          : parseInt(payload.updatedQuantity);
      // If the value of updatedQuantity is below 1 or over 100, return the value as is
      if (updatedQuantity < 1 || updatedQuantity > 99) {
        return value;
      }
      // Find the existing item, return all other values and then apply the new
      // quantity and price of the matching item, else, return the item as normal
      return value.id === payload.id
        ? {
            ...value,
            quantity: updatedQuantity,
            total_price: parseFloat(
              (value.product_price * updatedQuantity).toFixed(2)
            ),
          }
        : value;
    });
  }
  // If no matches have been found at all, return the current item with a quantity of 1
  return [
    ...cartItems,
    { ...payload, quantity: 1, total_price: payload.product_price },
  ];
};

/////////////////////////////////
// *** DELETE PRODUCT ITEM *** //
/////////////////////////////////
export const deleteProductItem = (cartItems, payload) => {
  const filteredItems = cartItems.filter((item) => item.id !== payload.id);
  return window.confirm("Delete product from cart?")
    ? filteredItems
    : cartItems;
};
