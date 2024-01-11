import React from 'react';
import './BrowseCategories.scss';
import { browseCategoriesData } from '../../../mocks';
import { Title } from '../../units/Title';
import { CategorySelection } from './CategorySelection';

const browseCategoriesClassName = 'browse-categories';

const BrowseCategories = () => {
  const { title, categorySelection } = browseCategoriesData;

  return (
    <section className={browseCategoriesClassName}>
      <Title heading="h2" title={title} />
      <div className={`${browseCategoriesClassName}__content`}>
        <ul className={`${browseCategoriesClassName}__container`}>
          {categorySelection.map((data) => (
            <CategorySelection
              key={data.id}
              className={`${browseCategoriesClassName}__categorySelection`}
              data={data}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export { BrowseCategories };
