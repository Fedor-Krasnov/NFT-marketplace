import React from 'react';
import classNames from 'classnames';
import categorySelectionStyles from './CategorySelection.module.scss';

const categorySelectionClassName = 'category-selection';

const CategorySelection = ({ data }) => {
  const { image, icon, category } = data;

  return (
    <li>
      <div className={categorySelectionStyles[categorySelectionClassName]}>
        <div className={categorySelectionStyles[`${categorySelectionClassName}__img`]}>
          <img alt={image.alt} src={image.src} />
          <div className={categorySelectionStyles[`${categorySelectionClassName}__icon`]}>
            <img alt={icon.alt} src={icon.src} />
          </div>
        </div>
        <div className={classNames(categorySelectionStyles[`${categorySelectionClassName}__details`], 'nft-details')}>
          <h3>{category}</h3>
        </div>
      </div>
    </li>
  );
};

export { CategorySelection };
