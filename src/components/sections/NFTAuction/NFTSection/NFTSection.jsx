import React from 'react';
import { NFTAuctionPageData } from '../../../../mocks/Page';
import nftSectionStyles from './NFTSection.module.scss';

const nftSectionClassName = 'nft-section';

const NFTSection = () => {
  const { background } = NFTAuctionPageData;

  return (
    <div className={nftSectionStyles[nftSectionClassName]}>
      <div
        className={nftSectionStyles[`${nftSectionClassName}__background`]}
        style={{ '--background': `url(${background.src}) no-repeat center` }}
      />
    </div>
  );
};

export { NFTSection };
