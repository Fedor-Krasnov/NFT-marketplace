import React from 'react';
import './BrowseMarketplacePage.scss';
import { browseMarketplacePageData } from '../../../mocks/Page';
import { WorkLayoutSection } from '../../sections/WorkLayoutSection';
import { Icon, IconCode, Title } from '../../units';

const browseMarketplacePageClassName = 'browse-marketplace';

const BrowseMarketplacePage = () => {
  const { title, description, categoryOne, categoryOneSpan, categoryTwo, categoryTwoSpan } = browseMarketplacePageData;

  return (
    <div className={browseMarketplacePageClassName}>
      <div className={`${browseMarketplacePageClassName}__title`}>
        <Title description={description} title={title} />
      </div>
      <div className={`${browseMarketplacePageClassName}__search-string`}>
        <label>
          <input
            className={`${browseMarketplacePageClassName}__search`}
            placeholder="Search your favourite NFTs"
            type="text"
          />
        </label>
        <div className={`${browseMarketplacePageClassName}__search-icon`}>
          <Icon code={IconCode.magnifyingGlass} />
        </div>
      </div>
      <div className={`${browseMarketplacePageClassName}__choice-point`}>
        <div className={`${browseMarketplacePageClassName}__trait`}></div>
        <div className={`${browseMarketplacePageClassName}__buttons`}>
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
      <WorkLayoutSection />
    </div>
  );
};

export { BrowseMarketplacePage };
