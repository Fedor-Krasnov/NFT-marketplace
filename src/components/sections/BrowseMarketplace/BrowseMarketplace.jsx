import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { browseMarketplaceData } from '../../../mocks/sections';
import { WorkLayout } from '../../innerComponents';
import { Icon, IconCode, Title } from '../../units';
import { DescriptionSize, TitleSize } from '../../units/Title/types';
import browseMarketplaceStyles from './BrowseMarketplace.module.scss';

const browseMarketplaceClassName = 'browse-marketplace';

const BrowseMarketplace = () => {
  const { title, description, categoryOne, categoryOneSpan, categoryTwo, categoryTwoSpan } = browseMarketplaceData;
  const { pathname, search } = useLocation();
  const paramCategory = new URLSearchParams(search).get('category');
  const [categoryValue, setCategoryValue] = useState('');

  return (
    <div className={browseMarketplaceStyles[browseMarketplaceClassName]}>
      <Title
        className={browseMarketplaceStyles[`${browseMarketplaceClassName}__title`]}
        description={description}
        descriptionSize={DescriptionSize.large}
        heading={TitleSize.h1}
        title={title}
      />
      <div className={browseMarketplaceStyles[`${browseMarketplaceClassName}__search-string`]}>
        <label>
          <input
            className={browseMarketplaceStyles[`${browseMarketplaceClassName}__search`]}
            defaultValue={paramCategory}
            onChange={(event) => setCategoryValue(event.target.value)}
            placeholder="Search your favourite NFTs"
            type="text"
          />
        </label>
        <div className={browseMarketplaceStyles[`${browseMarketplaceClassName}__search-icon`]}>
          <Link to={categoryValue ? `?category=${categoryValue}` : pathname}>
            <Icon code={IconCode.zoom} />
          </Link>
        </div>
      </div>
      <div className={browseMarketplaceStyles[`${browseMarketplaceClassName}__choice-point`]}>
        <div className={browseMarketplaceStyles[`${browseMarketplaceClassName}__trait`]}></div>
        <div className={browseMarketplaceStyles[`${browseMarketplaceClassName}__buttons`]}>
          <a href="src/components/sections/BrowseMarketplace">
            {categoryOne}
            <span>{categoryOneSpan}</span>
          </a>
          <a href="src/components/sections/BrowseMarketplace">
            {categoryTwo}
            <span>{categoryTwoSpan}</span>
          </a>
        </div>
      </div>
      <WorkLayout />
    </div>
  );
};

export { BrowseMarketplace };
