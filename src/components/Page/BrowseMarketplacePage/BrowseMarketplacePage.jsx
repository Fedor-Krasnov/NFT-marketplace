import React from 'react';
import { browseMarketplacePageData } from '../../../mocks/Page';
import { WorkLayoutSection } from '../../sections';
import { Icon, IconCode, Title } from '../../units';
import browseMarketplacePageStyles from './BrowseMarketplacePage.module.scss';

const browseMarketplacePageClassName = 'browse-marketplace';

const BrowseMarketplacePage = () => {
  const { title, description, categoryOne, categoryOneSpan, categoryTwo, categoryTwoSpan } = browseMarketplacePageData;

  return (
    <div className={browseMarketplacePageStyles[browseMarketplacePageClassName]}>
      <div className={browseMarketplacePageStyles[`${browseMarketplacePageClassName}__title`]}>
        <Title description={description} heading="h1" title={title} />
      </div>
      <div className={browseMarketplacePageStyles[`${browseMarketplacePageClassName}__search-string`]}>
        <label>
          <input
            className={browseMarketplacePageStyles[`${browseMarketplacePageClassName}__search`]}
            placeholder="Search your favourite NFTs"
            type="text"
          />
        </label>
        <div className={browseMarketplacePageStyles[`${browseMarketplacePageClassName}__search-icon`]}>
          <Icon code={IconCode.zoom} />
        </div>
      </div>
      <div className={browseMarketplacePageStyles[`${browseMarketplacePageClassName}__choice-point`]}>
        <div className={browseMarketplacePageStyles[`${browseMarketplacePageClassName}__trait`]}></div>
        <div className={browseMarketplacePageStyles[`${browseMarketplacePageClassName}__buttons`]}>
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
