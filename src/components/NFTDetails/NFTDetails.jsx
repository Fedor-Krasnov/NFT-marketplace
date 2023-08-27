import React from 'react';
import './NFTDetails.scss';

const NFTDetails = ({ data }) => {
  const { image, title, username } = data;

  return (
    <div className="nft-details">
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <div className="nft-details__user">
        <div className="nft-details__avatar">{image && <img alt={image.alt} src={image.src} />}</div>
        <div className="nft-details__username" dangerouslySetInnerHTML={{ __html: username }} />
      </div>
    </div>
  );
};

export { NFTDetails };
