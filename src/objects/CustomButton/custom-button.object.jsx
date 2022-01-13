import "./custom-button.style.scss";
import { Link } from "react-router-dom";

function CustomButton({ to, type, children, className, ...otherProps }) {
  let markup;
  if (to) {
    markup = (
      <Link to={to} className={`o-button o-button--${type}`} {...otherProps}>
        {children}
      </Link>
    );
  } else {
    markup = (
      <button
        className={`${className} o-button o-button--${type}`}
        {...otherProps}
      >
        {children}
      </button>
    );
  }

  return markup;
}

export default CustomButton;
