import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { browseMarketplacePageData } from '../../../mocks/Page';
import { WorkLayout } from '../../sections';
import { Icon, IconCode, Title } from '../../units';
import { DescriptionSize, TitleSize } from '../../units/Title/types';
import browseMarketplacePageStyles from './BrowseMarketplacePage.module.scss';

const browseMarketplacePageClassName = 'browse-marketplace';

const BrowseMarketplacePage = () => {
  const { title, description, categoryOne, categoryOneSpan, categoryTwo, categoryTwoSpan } = browseMarketplacePageData;
  const { search } = useLocation();
  const paramCategory = new URLSearchParams(search).get('category');
  const [categoryValue, setCategoryValue] = useState('');
  // TODO: исправить отображение задгнего фона

  return (
    <div className={browseMarketplacePageStyles[browseMarketplacePageClassName]}>
      <Title description={description} descriptionSize={DescriptionSize.large} heading={TitleSize.h1} title={title} />
      <div className={browseMarketplacePageStyles[`${browseMarketplacePageClassName}__search-string`]}>
        <label>
          <input
            className={browseMarketplacePageStyles[`${browseMarketplacePageClassName}__search`]}
            defaultValue={paramCategory}
            onChange={(event) => setCategoryValue(event.target.value)}
            placeholder="Search your favourite NFTs"
            type="text"
          />
        </label>
        <div className={browseMarketplacePageStyles[`${browseMarketplacePageClassName}__search-icon`]}>
          <Link to={`?category=${categoryValue}`}>
            <Icon code={IconCode.zoom} />
          </Link>
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
      <WorkLayout />
    </div>
  );
};

export { BrowseMarketplacePage };
