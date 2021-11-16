import "./product-preview.style.scss";

function ProductPreview() {
  return (
    <div className="product-preview">
      <div className="product-preview__content">
        <div className="product-preview__canvas">
          <img
            className="product-preview__image"
            src="https://www.trade.taralane.ie/marketing/images/TH5024ALT2.jpg"
            alt=""
          />
        </div>
        <div className="product-preview__details">
          <p className="product-preview__title">Sia Geo Lamp</p>
          <p className="product-preview__price">£49.99</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPreview;
