import React from "react";
import { useParams } from "react-router-dom";

import FTDetailCard from "../components/FTDetailCard";

import EirlysImage from "../assets/images/card-images/Eirlys.png";
import GizeImage from "../assets/images/card-images/Gize.png";

const FaceDetail = () => {
  const { templateName } = useParams();

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

  if (!cardsData[templateName]) {
    return <div>Template not found</div>;
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
