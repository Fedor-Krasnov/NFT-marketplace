import React from 'react';
import nftDetailedInformationStyles from './NFTDetailedInformation.module.scss';

const nftDetailedInformationClassName = 'nft-details-information';

const NftDetailedInformation = ({ data }) => {
  const { price, highestBid } = data;

  return (
    <div className={nftDetailedInformationStyles[nftDetailedInformationClassName]}>
      <dl>
        <dt>Price</dt>
        <dd dangerouslySetInnerHTML={{ __html: price }} />
      </dl>
      <dl>
        <dt>Highest Bid</dt>
        <dd dangerouslySetInnerHTML={{ __html: highestBid }} />
      </dl>
    </div>
  );
};

export { NftDetailedInformation };
