import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { deleteProductFromCart } from "../../redux/cart/cart.actions";
import "./dropdown-cart.style.scss";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

function DropdownCart({ cartItems, deleteProductFromCart }) {
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
              <div
                className="dropdown-cart__remove-icon"
                onClick={() => deleteProductFromCart(single)}
              >
                <GrClose />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="dropdown-cart__ctas">
        <Link to="/shopping-cart">Checkout</Link>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  deleteProductFromCart: (item) => dispatch(deleteProductFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownCart);
