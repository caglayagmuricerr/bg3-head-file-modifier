import React from 'react';
import HeartBg from '../components/HeartBg';
import Card from '../components/Card';
import EirlysImage from '../assets/images/Eirlys.png'; // Import the image

const FaceTemplates = () => {
  const cardsData = [
    { image: EirlysImage, imageName: 'Eirlys', link: 'https://drive.google.com/file/d/1dyso-IXo_zotspDhBwvJVrGG9AEFbVxJ/view?usp=sharing', linkText: 'Feminine Body Type, Standard Body' },
    { image: EirlysImage, imageName: 'Eirlys', link: 'http://example.com/2', linkText: 'Feminine Body Type, Strong Body' },
    { image: EirlysImage, imageName: 'Eirlys', link: 'http://example.com/3', linkText: 'Masculine Body Type, Standard Body' },
    { image: EirlysImage, imageName: 'Eirlys', link: 'http://example.com/4', linkText: 'Masculine Body Type, Strong Body' },
  ];

  return (
    <div>
      <HeartBg />
      <h1>Face Templates</h1>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} imageName={card.imageName} link={card.link} linkText={card.linkText} />
        ))}
      </div>
    </div>
  );
};

export default FaceTemplates;
