import React from 'react';
import './NFTDetails.scss';

const nftDetailsClassName = 'nft-details';

const NFTDetails = ({ data }) => {
  const { image, title, username } = data;

  return (
    <div className={nftDetailsClassName}>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <div className={`${nftDetailsClassName}__user`}>
        <div className={`${nftDetailsClassName}__avatar`}>{image && <img alt={image.alt} src={image.src} />}</div>
        <div className={`${nftDetailsClassName}__username`} dangerouslySetInnerHTML={{ __html: username }} />
      </div>
    </div>
  );
};

export { NFTDetails };
