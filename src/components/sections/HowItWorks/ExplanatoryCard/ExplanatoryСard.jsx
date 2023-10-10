import React from 'react';
import './ExplanatoryCard.scss';

const ExplanatoryCard = ({ data }) => {
  const { offer, offerDescription, image } = data;

  return (
    <div className="explanatory-card">
      <img alt={image.alt} src={image.src} />
      <div>
        <h3 dangerouslySetInnerHTML={{ __html: offer }} />
        <p dangerouslySetInnerHTML={{ __html: offerDescription }} />
      </div>
    </div>
  );
};

export { ExplanatoryCard };
