import "./intro-text.style.scss";

function IntroText({ header, children }) {
  return (
    <div className="intro-text">
      {header && <h1 className="intro-text__header">{header}</h1>}
      {children && <p className="intro-text__paragraph">{children}</p>}
    </div>
  );
}

export default IntroText;
