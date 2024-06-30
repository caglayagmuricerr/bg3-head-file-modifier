import React from "react";
import Tooltip from "./utils/Tooltip";  // Adjust the path if needed
import "../styles/FTCard.css";

const FaceTemplateCard = ({ image, imageName, link, text }) => {
  const handleButtonClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="two-column-layout">
      <div className="head-card">
        <Tooltip
          content={
            <img src={image} alt={imageName} className="full-size-image" />
          }
        >
          <img
            src={image}
            alt={imageName}
            className="card-image"
          />
        </Tooltip>
        <div className="image-name">
          {imageName}
          <br />
        </div>
        <div className="link-text">{text}</div>
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
