import React, { useState } from "react";
import "../styles/FTCard.css";

const FaceTemplateCard = ({ image, imageName, link, text }) => {
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

  const handleButtonClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="two-column-layout">
      <div className="head-card">
        <img
          src={image}
          alt={imageName}
          className="card-image"
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
        <div className="image-name">
          {imageName}
          <br />
        </div>
        <div className="link-text">{text}</div>
        {isTooltipVisible && (
          <div
            className="hover-display-image"
            style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
          >
            <img src={image} alt={imageName} className="full-size-image" />
          </div>
        )}
      </div>
      <div className="download-container">
        <button className="temp-download-btn" onClick={handleButtonClick}>
          Download
        </button>
      </div>
    </div>
  );
};

export default FaceTemplateCard;
