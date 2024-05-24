import React from 'react';
import { Title } from '../../units/Title';
import browseCategoriesStyles from './BrowseCategories.module.scss';
import { CategorySelection } from './CategorySelection';

const browseCategoriesClassName = 'browse-categories';

const BrowseCategories = ({ content }) => {
  const { title, categorySelection } = content;

  return (
    <div className={browseCategoriesStyles[browseCategoriesClassName]}>
      <Title heading="h2" title={title} />
      <div className={browseCategoriesStyles[`${browseCategoriesClassName}__content`]}>
        <ul className={browseCategoriesStyles[`${browseCategoriesClassName}__container`]}>
          {categorySelection.map((data) => (
            <CategorySelection
              key={data.id}
              className={browseCategoriesStyles[`${browseCategoriesClassName}__categorySelection`]}
              data={data}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export { BrowseCategories };
