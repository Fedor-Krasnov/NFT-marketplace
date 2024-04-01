import React from 'react';
import { Link } from 'react-router-dom';
import explanatoryCardStyles from './ExplanatoryCard.module.scss';

const explanatoryCardClassName = 'explanatory-card';

const ExplanatoryCard = ({ data }) => {
  const { offer, offerDescription, image, link } = data;

  return (
    <div className={explanatoryCardStyles[explanatoryCardClassName]}>
      <Link to={link}>
        <div className={explanatoryCardStyles[`${explanatoryCardClassName}__container`]}>
          <img alt={image.alt} src={image.src} />
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: offer }} />
            <p dangerouslySetInnerHTML={{ __html: offerDescription }} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export { ExplanatoryCard };
