import "./custom-select.style.scss";

function CustomSelect({ children, className, ...otherProps }) {
  return (
    <select className={`o-select ${className}`} {...otherProps}>
      {children}
    </select>
  );
}

export default CustomSelect;
