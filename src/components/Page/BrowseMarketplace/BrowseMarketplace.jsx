import React from 'react';
import './BrowseMarketplace.scss';
import { browseMarketplacePageData } from '../../../mocks/Page/browseMarketplacePageData.js';
import { Title } from '../../units/index.js';
import { WorkLayout } from './WorkLayout/index.js';

const BrowseMarketplace = () => {
  const { title, description, image, categoryOne, categoryOneSpan, categoryTwo, categoryTwoSpan } =
    browseMarketplacePageData;

  return (
    <div className="browse-marketplace">
      <div className="browse-marketplace__title">
        <Title description={description} title={title} />
      </div>
      <div className="browse-marketplace__search-string">
        <label>
          <input className="search" placeholder="Search your favourite NFTs" type="text" />
        </label>
        <div className="browse-marketplace__search-img">
          <a href="">
            <img alt={image.alt} className="magnifying-glass" src={image.src} />
          </a>
        </div>
      </div>
      <div className="browse-marketplace__choice-point">
        <div className="browse-marketplace__trait"></div>
        <div className="browse-marketplace__buttons">
          <a href="">
            {categoryOne}
            <span>{categoryOneSpan}</span>
          </a>
          <a href="">
            {categoryTwo}
            <span>{categoryTwoSpan}</span>
          </a>
        </div>
      </div>
      <div className="browse-marketplace__offers-with-сards">
        <WorkLayout />
      </div>
    </div>
  );
};

export { BrowseMarketplace };
