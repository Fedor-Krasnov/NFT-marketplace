import React from 'react';
import { pageAuctionNFTPageData } from '../../../../mocks/Page';
import nftSectionStyles from './NFTSectionPage.module.scss';

const nftSectionClassName = 'nft-section';

const NFTSectionPage = () => {
  const { background } = pageAuctionNFTPageData;

  return (
    <section className={nftSectionStyles[nftSectionClassName]}>
      <div
        className={nftSectionStyles[`${nftSectionClassName}__background`]}
        style={{ '--background': `url(${background.src}) no-repeat center` }}
      />
    </section>
  );
};

export { NFTSectionPage };
