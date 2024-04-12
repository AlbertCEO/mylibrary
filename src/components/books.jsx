import React from "react";

import "./books.css";

export const Books = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  link,
  target,
}) => {
  return (
    <div className="card-container">
     <img src={imgSrc} alt={imgAlt} className="card-img" />
    <h1 className="card-title">{title}</h1>
    <p className="card-description">{description}</p>
    <a href={link} className="card-btn" target={target}>
          {buttonText}
        </a>
    </div>
  );
};