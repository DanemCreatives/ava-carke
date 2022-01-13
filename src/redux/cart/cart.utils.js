export const cartItemCheck = (item, cart) => {
  const matchingItem = cart.find((single) => single.id === item.id);

  if (matchingItem) {
    return cart.map((single) =>
      single.id === item.id
        ? {
            ...single,
            quantity: single.quantity + 1,
            total_price: (single.product_price * (single.quantity + 1)).toFixed(
              2
            ),
          }
        : single
    );
  }

  return [...cart, { ...item, quantity: 1, total_price: item.product_price }];
};

export const cartSubtotalCalc = (cart) => {
  const subtotal = cart.reduce((accumulator, single) => {
    const totalPrice = parseFloat(single.total_price);
    return accumulator + totalPrice;
  }, 0);

  return subtotal;
};

export const deleteItemFromCart = (selectedItem, cart) => {
  const confirmText =
    "Are you sure you want to delete '" +
    selectedItem.product_name +
    "' from shopping cart?";

  if (window.confirm(confirmText) === true) {
    return cart.filter((cartItem) => cartItem !== selectedItem);
  }

  return cart;
};
