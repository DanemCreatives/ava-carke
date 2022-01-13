import "./tailwind-grid.style.scss";

function Container({ children, className }) {
  return (
    <div className={`${className ? className : ""} container mx-auto`}>
      {children}
    </div>
  );
}

function Row({ children, className, cols, gap }) {
  const componentClass = className ? className + " " : "";
  const gutterClass = gap ? `gap-` + gap + " " : "";
  let columnClasses;

  if (typeof cols === "object") {
    let columnGroup = [];
    for (const [key, value] of Object.entries(cols)) {
      key === "default"
        ? columnGroup.push(`grid-cols-${value}`)
        : columnGroup.push(`${key}:grid-cols-${value}`);
      columnClasses = columnGroup.join(" ");
    }
  } else {
    columnClasses = cols ? `grid-cols-` + cols + " " : "";
  }

  return (
    <div className={`${componentClass}grid ${columnClasses} ${gutterClass}`}>
      {children}
    </div>
  );
}

function Col({ children, className, start, end, span }) {
  const componentClass = className ? className + " " : "";
  let columnClasses;
  let gridGroup = [
    { type: "start", ...start },
    { type: "span", ...span },
    { type: "end", ...end },
  ];
  let filteredGroup = gridGroup
    .filter((single, index) => {
      return Object.keys(single).length > 1;
    })
    .map((single, index) => {
      if (typeof single === "object") {
        let columnGroup = [];
        for (const [key, value] of Object.entries(single)) {
          if (key !== "type") {
            key === "default"
              ? columnGroup.push(`col-${single.type}-${value}`)
              : columnGroup.push(`${key}:col-${single.type}-${value}`);
            columnClasses = columnGroup.join(" ");
          }
        }
      } else {
        columnClasses = single ? `col-${single.type}-` + single + " " : "";
      }
      return columnClasses;
    });

  const result = filteredGroup.join(" ");

  return <div className={`${componentClass}col ${result}`}>{children}</div>;
}

export { Container, Row, Col };
