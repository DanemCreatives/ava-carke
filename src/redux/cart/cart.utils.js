// Group same items as one quantitative item
export const groupCartItems = (cartItems, payload) => {
  const existingCartItem = cartItems.find((value) => value.id === payload.id);

  if (existingCartItem) {
    return cartItems.map((value) =>
      value.id === payload.id
        ? {
            ...value,
            quantity: value.quantity + 1,
            total_price: value.product_price * (value.quantity + 1),
          }
        : value
    );
  }

  return [
    ...cartItems,
    { ...payload, quantity: 1, total_price: payload.product_price },
  ];
};

// Conditionally remove an entire product from the cart
export const deleteProductItem = (cartItems, payload) => {
  const filteredItems = cartItems.filter((item) => item.id !== payload.id);
  return window.confirm("Delete product from cart?")
    ? filteredItems
    : cartItems;
};
