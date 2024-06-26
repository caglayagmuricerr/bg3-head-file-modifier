import React from "react";
import { Link } from "react-router-dom";

const FTDetailCard = ({ image, imageName, description, link }) => {
  return (
    <div className="ft-detail-card">
      <img src={image} alt={imageName} className="card-image" />
      <div className="image-name">
        {imageName}
        <br />
      </div>
      <div className="description">{description}</div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="details-button"
      >
        DOWNLOAD
      </a>
      <Link to={`/face-templates`} className="back-link">
        Back to Face Templates
      </Link>
    </div>
  );
};

export default FTDetailCard;
