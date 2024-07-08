import React from "react";
import FTCard from "../components/FaceTemplateCard";

import RevnaImage from "../assets/images/card-images/static/Revna.png";
import EirlysImage from "../assets/images/card-images/static/Eirlys.png";
import VanrieImage from "../assets/images/card-images/static/Vanrie.png";
import GizeImage from "../assets/images/card-images/static/Gize.png";
import DilaraImage from "../assets/images/card-images/static/Dilara.png";

import TemplateGif from "../assets/images/card-images/gifs/Template.gif";
import EirlysGif from "../assets/images/card-images/gifs/Eirlys.gif";
import GizeGif from "../assets/images/card-images/gifs/Gize.gif";
import VanrieGif from "../assets/images/card-images/gifs/Vanrie.gif";
import RevnaGif from "../assets/images/card-images/gifs/Revna.gif";
import DilaraGif from "../assets/images/card-images/gifs/Dilara.gif";

const FaceTemplates = () => {
  const cardsData = [
    {
      image: RevnaImage,
      gif: RevnaGif,
      imageName: "Revna",
      link: "https://drive.google.com/file/d/1HDzk2L7X64KTWPLSt3WFP8R5JJD1yKEI/view?usp=sharing",
      text: "Elf, Feminine Body Type, Standard Body + Vampire Teeth",
    },
    {
      image: VanrieImage,
      gif: VanrieGif,
      imageName: "Vanrie",
      link: "https://drive.google.com/file/d/1OeabybZl_RSZXosfiv0ROXbPsDMjMKJ2/view?usp=sharing",
      text: "Half-Elf, Feminine Body Type, Standard Body",
    },
    {
      image: EirlysImage,
      gif: EirlysGif,
      imageName: "Eirlys",
      link: "https://drive.google.com/file/d/1xR-wyCOzzIa8AXSRcOVkIZ3lwvtTwBCz/view?usp=sharing",
      text: "Human, Feminine Body Type, Standard Body",
    },
    {
      image: GizeImage,
      gif: GizeGif,
      imageName: "Gize",
      link: "https://drive.google.com/file/d/1XkZ8OUYvm4MfrtS612dki0R8WlFzoKFm/view?usp=sharing",
      text: "Elf, Feminine Body Type, Standard Body",
    },
    {
      image: DilaraImage,
      gif: DilaraGif,
      imageName: "Dilara",
      link: "https://drive.google.com/file/d/1Spdu2zZ0UxeRmj1Hj67K1pPVr4Rpelbo/view?usp=sharing",
      text: "Elf, Feminine Body Type, Standard Body + Vampire Teeth",
    },
  ];

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "60px" }}>
        <div>
          <img
            src={TemplateGif}
            alt="Template"
            style={{
              width: "180px",
              borderRadius: "10px",
              marginLeft: "25px",
              marginTop: "50px",
            }}
          />
        </div>
        <div>
          <p style={{ marginTop: "50px" }}>
            ・୨୧・ Choose a face template to replace in files.
            <br />
            ・୨୧・ If you downloaded a file template (Vanilla or UTAV),
            <br />
            it includes Shadowheart by default, but with longer lashes.
            <br />
            ・୨୧・ You can replace her face with the faces here.
            <br />
            ・୨୧・ You are welcome to create and publish your own mod, as long
            as you give me credit.
          </p>
        </div>
      </div>
      <div className="cards-container" style={{ marginTop: "40px" }}>
        <h1>⋆ ˚｡⋆୨୧˚・Face Templates・˚୨୧⋆｡˚ ⋆</h1>
        {cardsData.map((card, index) => (
          <FTCard
            key={index}
            image={card.image}
            gif={card.gif}
            xOffset={50}
            yOffset={-200}
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
