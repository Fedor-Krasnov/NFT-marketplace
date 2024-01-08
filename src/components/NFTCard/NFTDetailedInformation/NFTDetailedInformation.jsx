import React from 'react';
import './NFTDetailedInformation.scss';

const nftDetailedInformationClassName = 'nft-details-information';

const NftDetailedInformation = ({ data }) => {
  const { price, highestBid } = data;

  return (
    <div className={nftDetailedInformationClassName}>
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
