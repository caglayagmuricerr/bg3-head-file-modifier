import React from "react";
import HeartBg from "../components/HeartBg";
import Card from "../components/Card";
import EirlysImage from "../assets/images/Eirlys.png";
import GizeImage from "../assets/images/Gize.png";

const FaceTemplates = () => {
  const cardsData = [
    {
      image: EirlysImage,
      imageName: "Eirlys",
      link: "https://drive.google.com/file/d/1dyso-IXo_zotspDhBwvJVrGG9AEFbVxJ/view?usp=sharing",
      linkText: "Human, Feminine Body Type, Standard Body",
    },
    {
      image: GizeImage,
      imageName: "Gize",
      link: "https://drive.google.com/file/d/16iMB70lIWlS3g9ryUnIOCRgUjzYnK8Nj/view?usp=sharing",
      linkText: "Elf, Feminine Body Type, Standard Body",
    }
  ];

  return (
    <div>
      <HeartBg />
      <h1>Face Templates</h1>
      <p>
        Choose a face template to replace in files.
        <br />
        Or choose a {" "}
        <a
          href="https://drive.google.com/file/d/1UqAJr0RzdNCqs87XNhS6kqn2q2b80y1z/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          head within the game
        </a>{" "}
        to customize.
      </p>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            imageName={card.imageName}
            link={card.link}
            linkText={card.linkText}
          />
        ))}
      </div>
    </div>
  );
};

export default FaceTemplates;
