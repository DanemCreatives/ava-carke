import "./dropdown-cart.style.scss";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

function DropdownCart() {
  const [cartItems] = useState([]);

  return (
    <div className="dropdown-cart">
      {cartItems.length === 0 && (
        <p className="dropdown-cart__paragraph">Your shopping cart is empty</p>
      )}
      <div className="dropdown-cart__items-container">
        {cartItems.map((single, key) => (
          <div className="dropdown-cart__item" key={key}>
            <img
              className="dropdown-cart__thumb"
              src={single.product_thumbs && single.product_thumbs[0]}
              alt={single.product_name}
            />
            <p className="dropdown-cart__title">{single.product_name}</p>
            <div className="dropdown-cart__quantity">x {single.quantity}</div>
            <div className="dropdown-cart__price">£{single.total_price}</div>
            <div className="dropdown-cart__remove">
              <div className="dropdown-cart__remove-icon">
                <GrClose />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownCart;
