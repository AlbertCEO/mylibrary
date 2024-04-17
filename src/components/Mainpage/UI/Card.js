import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

const CardDetails = (props) => {
    const classes = "card-details " + props.className;
    return <div className={classes}>{props.children}</div>;
  };

export { Card, CardDetails };