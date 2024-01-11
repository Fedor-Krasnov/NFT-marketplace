import React from 'react';
import classNames from 'classnames';

const categorySelectionClassName = 'nft-card';

const CategorySelection = ({ data }) => {
  const { image, icon, category } = data;

  return (
    <li>
      <div className={categorySelectionClassName}>
        <div className={`${categorySelectionClassName}__img`}>
          <img alt={image.alt} src={image.src} />
          <div className={`${categorySelectionClassName}__icon`}>
            <img alt="Nft card icon" src={icon.src} />
          </div>
        </div>
        <div className={classNames(`${categorySelectionClassName}__details`, 'nft-details')}>
          <h3>{category}</h3>
        </div>
      </div>
    </li>
  );
};

export { CategorySelection };
