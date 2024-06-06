import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import categorySelectionStyles from './CategorySelection.module.scss';

const categorySelectionClassName = 'category-selection';

const CategorySelection = ({ data }) => {
  const { image, icon, category } = data;

  return (
    <Link to={`/browse-marketplace?category=${category}`}>
      <li>
        <div className={categorySelectionStyles[categorySelectionClassName]}>
          <div className={categorySelectionStyles[`${categorySelectionClassName}__img`]}>
            <img alt={image.alt} src={image.src} />
            <div className={categorySelectionStyles[`${categorySelectionClassName}__icon`]}>
              <img alt={icon.alt} src={icon.src} />
            </div>
          </div>
          <div className={classNames(categorySelectionStyles[`${categorySelectionClassName}__details`], 'nft-details')}>
            <h3 dangerouslySetInnerHTML={{ __html: category }} />
          </div>
        </div>
      </li>
    </Link>
  );
};

export { CategorySelection };
