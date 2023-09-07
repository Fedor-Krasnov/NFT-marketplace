import React from 'react';
import './BrowseCategories.scss';
import { browseCategoriesData } from '../../../mocks';
import { Title } from '../../units/Title';
import { CategorySelection } from './CategorySelection';

const BrowseCategories = () => {
  const { title, categorySelection } = browseCategoriesData;

  return (
    <section className="browse-categories">
      <Title heading="h2" title={title} />
      <div className="browse-categories__content">
        <ul className="browse-categories__container">
          {categorySelection.map((data) => (
            <CategorySelection key={data.id} className="browse-categories__categorySelection" data={data} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export { BrowseCategories };
