import "./cart.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Row, Col } from "../../grid/TailwindGrid/tailwind-grid.component";
import { GrClose, GrUpdate } from "react-icons/gr";
import { useState } from "react";
import CustomButton from "../../objects/CustomButton/custom-button.object";
import CustomInput from "../../objects/CustomInput/custom-input.object";
import {
  addItemToCart,
  deleteProductFromCart,
} from "../../redux/cart/cart.actions";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

function Cart({ cartItems, cartTotal, addItemToCart, deleteProductFromCart }) {
  const [quantityInput, setQuantityInput] = useState(0);
  const [updatedCartQuantity, setUpdatedCartQuantity] = useState(false);

  return (
    <div className="cart">
      <Row className="cart__head" cols={12}>
        <Col
          className="cart__title-cell cart__title-cell--image"
          span={{ default: 1 }}
        >
          IMAGE
        </Col>
        <Col
          className="cart__title-cell cart__title-cell--name"
          span={{ default: 4 }}
        >
          PRODUCT NAME
        </Col>
        <Col
          className="cart__title-cell cart__title-cell--model"
          span={{ default: 2 }}
        >
          MODEL
        </Col>
        <Col
          className="cart__title-cell cart__title-cell--quantity"
          span={{ default: 3 }}
        >
          QUANTITY
        </Col>
        <Col
          className="cart__title-cell cart__title-cell--price"
          span={{ default: 1 }}
        >
          UNIT PRICE
        </Col>
        <Col
          className="cart__title-cell cart__title-cell--total"
          span={{ default: 1 }}
        >
          TOTAL
        </Col>
      </Row>

      {cartItems.map((item, key) => {
        return (
          <Row className="cart__body" cols={12} key={key}>
            <Col className="cart__cell cart__cell--image" span={{ default: 1 }}>
              <img
                className="cart__preview"
                alt={item.product_name}
                src={item.product_thumbs[0]}
              />
            </Col>
            <Col className="cart__cell cart__cell--name" span={{ default: 4 }}>
              {item.product_name}
            </Col>
            <Col className="cart__cell cart__cell--model" span={{ default: 2 }}>
              {item.product_code}
            </Col>
            <Col
              className="cart__cell cart__cell--quantity"
              span={{ default: 3 }}
            >
              <CustomInput
                className="cart__quantity-input"
                type="number"
                styleType="secondary"
                min="1"
                max="99"
                value={
                  quantityInput.itemID === item.id
                    ? quantityInput.target
                    : item.quantity
                }
                onChange={(e) => {
                  setQuantityInput({
                    itemID: item.id,
                    target: parseInt(e.target.value),
                  });
                  setUpdatedCartQuantity(false);
                }}
              />
              <CustomButton
                className={`cart__update-product ${
                  quantityInput.itemID === item.id && !updatedCartQuantity
                    ? "updating"
                    : ""
                }`}
                type="success"
                onClick={() => {
                  setUpdatedCartQuantity(true);
                  if (quantityInput.itemID === item.id) {
                    addItemToCart({
                      ...item,
                      updatedQuantity: quantityInput.target,
                    });
                  }
                }}
              >
                <GrUpdate />
              </CustomButton>
              <CustomButton
                className="cart__delete-product"
                type="warning"
                onClick={() => deleteProductFromCart(item)}
              >
                <GrClose />
              </CustomButton>
            </Col>
            <Col
              className="cart__cell cart__cell--unit-price"
              span={{ default: 1 }}
            >
              {item.product_price}
            </Col>
            <Col className="cart__cell cart__cell--total" span={{ default: 1 }}>
              {item.total_price}
            </Col>
          </Row>
        );
      })}

      <Row className="cart__foot" cols={12}>
        <Col
          className="cart__base-cell cart__base-cell--title"
          span={{ default: 10 }}
        >
          Subtotal:
        </Col>
        <Col
          className="cart__base-cell cart__base-cell--subtotal"
          span={{ default: 2 }}
        >
          £{cartTotal}
        </Col>
      </Row>
      <div className="cart__ctas">
        <CustomButton
          className="cart__button cart__button--primary"
          to="/checkout"
          type="tertiary"
        >
          Checkout
        </CustomButton>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  deleteProductFromCart: (item) => dispatch(deleteProductFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
