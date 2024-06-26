import React from "react";
import FTDetailCard from "../components/FTDetailCard";
import EirlysImage from "../assets/images/card-images/Eirlys.png";
import GizeImage from "../assets/images/card-images/Gize.png";
import { useParams } from "react-router-dom";

const FaceDetail = () => {
  const { templateName } = useParams();

  // Example data (you can fetch this dynamically based on templateName)
  const cardsData = {
    eirlys: {
      image: EirlysImage,
      imageName: "Eirlys",
      description: "Human, Feminine Body Type, Standard Body",
      link:
        "https://drive.google.com/file/d/1dyso-IXo_zotspDhBwvJVrGG9AEFbVxJ/view?usp=sharing",
    },
    gize: {
      image: GizeImage,
      imageName: "Gize",
      description: "Elf, Feminine Body Type, Standard Body",
      link:
        "https://drive.google.com/file/d/16iMB70lIWlS3g9ryUnIOCRgUjzYnK8Nj/view?usp=sharing",
    },
  };

  // Check if templateName exists in cardsData, otherwise handle not found scenario
  if (!cardsData[templateName]) {
    console.log("Template name:", templateName); // Log templateName to console for debugging
    console.log("Available templates:", Object.keys(cardsData)); // Log available templates for debugging
    return <div>Template not found</div>; // Handle not found scenario
  }

  const { image, imageName, description, link } = cardsData[templateName];

  return (
    <div>
      <FTDetailCard
        image={image}
        imageName={imageName}
        description={description}
        link={link}
      />
    </div>
  );
};

export default FaceDetail;
