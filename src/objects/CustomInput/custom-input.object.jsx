import "./custom-input.style.scss";

function CustomInput({ className, styleType, ...otherProps }) {
  return (
    <input
      className={`${className ? className : ""} o-input o-input--${
        styleType ? styleType : ""
      }`}
      {...otherProps}
    />
  );
}

export default CustomInput;
