import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";
import CustomButton from "../../objects/CustomButton/custom-button.object";
import "./product-item.style.scss";

function ProductItem({ single, addItemToCart }) {
  return (
    <div className="product-item">
      <div className="product-item__canvas">
        <img
          className="product-item__image"
          src={single.product_gallery[0]}
          alt={single.product_name}
        />
        <CustomButton
          className="product-item__button"
          type="tertiary"
          onClick={() => {
            addItemToCart(single);
          }}
        >
          Add To Cart
        </CustomButton>
      </div>
      <ul className="product-item__description">
        {single.product_code && (
          <li className="product-item__code">{single.product_code}</li>
        )}
        {single.product_name && (
          <li className="product-item__title">{single.product_name}</li>
        )}
        {single.product_price && (
          <li className="product-item__price">£{single.product_price}</li>
        )}
      </ul>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(ProductItem);
