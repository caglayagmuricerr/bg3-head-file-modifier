import React from "react";
import FTCard from "../components/FaceTemplateCard";
import EirlysImage from "../assets/images/card-images/Eirlys.png";
import GizeImage from "../assets/images/card-images/Gize.png";
import VanrieImage from "../assets/images/card-images/Vanrie.png";
import RevnaImage from "../assets/images/card-images/Revna.png";

const FaceTemplates = () => {
  const cardsData = [
    {
      image: EirlysImage,
      imageName: "Eirlys",
      link: "https://drive.google.com/file/d/1dyso-IXo_zotspDhBwvJVrGG9AEFbVxJ/view?usp=sharing",
      text: "Human, Feminine Body Type, Standard Body",
    },
    {
      image: GizeImage,
      imageName: "Gize",
      link: "https://drive.google.com/file/d/16iMB70lIWlS3g9ryUnIOCRgUjzYnK8Nj/view?usp=sharing",
      text: "Elf, Feminine Body Type, Standard Body",
    },
    {
      image: VanrieImage,
      imageName: "Vanrie",
      link: "https://drive.google.com/file/d/15TH15VsGksYEsMK1pIrRTs-YEzDPQchH/view?usp=sharing",
      text: "Half-Elf, Feminine Body Type, Standard Body",
    },
    {
      image: RevnaImage,
      imageName: "Revna",
      link: "https://drive.google.com/file/d/1UqAJr0RzdNCqs87XNhS6kqn2q2b80y1z/view?usp=sharing",
      text: "Elf, Feminine Body Type, Standard Body + Vampire Teeth",
    }
  ];

  return (
    <div>
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
        <br />
        I don't recommend using in game heads as a base to customize.
        <br />
        These heads are already set up with the correct lods and do not
        require any additional work.
      </p>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <FTCard
            image={card.image}
            imageName={card.imageName}
            link={card.link}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export default FaceTemplates;
