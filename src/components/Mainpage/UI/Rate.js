import "./Rate.css";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const Rate = (props) => {
  const classes = "rating " + props.className;
  const [rating, setRating] = useState(5);
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
  }
  return (
    <div className={classes}>
      <Rating onClick={handleRating} fillColor="#007FFF" size="20" initialValue={rating}></Rating>
    </div>
  );
};
export default Rate;
