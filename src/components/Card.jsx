import React from 'react';
import '../styles/Card.css';

const Card = ({ image, link, linkText }) => {
  return (
    <div className="head-card">
      <img src={image} alt="Card" className="card-image" />
      <a href={link} className="card-link">{linkText}</a>
    </div>
  );
};

export default Card;