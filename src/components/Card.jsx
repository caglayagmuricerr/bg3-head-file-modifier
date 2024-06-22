import React from "react";
import "../styles/Card.css";

const Card = ({ image, imageName, link, linkText }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-link"
    >
      <div className="head-card">
        <img src={image} alt={imageName} className="card-image" />
        <div className="image-name">{imageName}<br/></div>
        <div className="link-text">{linkText}</div>
      </div>
    </a>
  );
};

export default Card;
