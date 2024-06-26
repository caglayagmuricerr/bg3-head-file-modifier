import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

const FaceTemplateCard = ({ image, imageName, text }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setTooltipVisible(true);
    updateTooltipPosition(e);
  };

  const handleMouseMove = (e) => {
    updateTooltipPosition(e);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const updateTooltipPosition = (e) => {
    const xOffset = 20; 
    const yOffset = 10;
    setTooltipPosition({ x: e.clientX + xOffset, y: e.clientY + yOffset });
  };

  return (
    <div className="head-card">
      <img
        src={image}
        alt={imageName}
        className="card-image"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      <div className="image-name">{imageName}<br/></div>
      <div className="link-text">{text}</div>
      {isTooltipVisible && (
        <div
          className="hover-display-image"
          style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
        >
          <img src={image} alt={imageName} className="full-size-image" />
        </div>
        )}
      <Link to={`/face-templates/${imageName.toLowerCase()}`} className="details-button">
        Details
      </Link>
    </div>
  );
};

export default FaceTemplateCard;
