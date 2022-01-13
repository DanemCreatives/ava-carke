import "./titled-list.style.scss";

function TitledList({ children, title }) {
  return (
    <div className="titled-list">
      <h3 className="titled-list__header">{title}</h3>
      <div className="titled-list__list">{children}</div>
    </div>
  );
}

export default TitledList;
