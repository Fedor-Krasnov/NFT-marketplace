import React from 'react';
import nftSectionStyles from './NFTSectionPage.module.scss';

const nftSectionClassName = 'nft-section';

const NFTSectionPage = () => (
  <section className={nftSectionStyles[nftSectionClassName]}>
    <div className={nftSectionStyles[`${nftSectionClassName}__background`]} />
  </section>
);

export { NFTSectionPage };
