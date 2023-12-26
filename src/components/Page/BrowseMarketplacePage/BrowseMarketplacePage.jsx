import React from 'react';
import './BrowseMarketplacePage.scss';
import { browseMarketplacePageData } from '../../../mocks/Page';
import { Icon, IconCode, Title } from '../../units';
import { WorkLayoutPage } from './WorkLayoutPage';

const BrowseMarketplacePage = () => {
  const { title, description, categoryOne, categoryOneSpan, categoryTwo, categoryTwoSpan } = browseMarketplacePageData;

  return (
    <div className="browse-marketplace">
      <div className="browse-marketplace__title">
        <Title description={description} title={title} />
      </div>
      <div className="browse-marketplace__search-string">
        <label>
          <input className="search" placeholder="Search your favourite NFTs" type="text" />
        </label>
        <div className="browse-marketplace__search-icon">
          <Icon code={IconCode.magnifyingGlass} />
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
        <WorkLayoutPage />
      </div>
    </div>
  );
};

export { BrowseMarketplacePage };
