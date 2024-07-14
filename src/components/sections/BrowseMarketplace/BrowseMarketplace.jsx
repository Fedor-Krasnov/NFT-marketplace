import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { browseMarketplaceData } from '../../../mocks/sections';
import { WorkLayout } from '../../innerComponents';
import { TabsType } from '../../innerComponents/WorkLayout/types';
import { Icon, IconCode, Title } from '../../units';
import { DescriptionSize, TitleSize } from '../../units/Title/types';
import browseMarketplaceStyles from './BrowseMarketplace.module.scss';

const browseMarketplaceClassName = 'browse-marketplace';

const BrowseMarketplace = () => {
  const { title, description } = browseMarketplaceData;
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
      <WorkLayout tabsType={TabsType.marketplace} />
    </div>
  );
};

export { BrowseMarketplace };
