import React from 'react';
import './NFTDetails.scss';
import { Link } from 'react-router-dom';

const nftDetailsClassName = 'nft-details';

const NFTDetails = ({ data }) => {
  const { image, title, username, userName } = data;

  return (
    <div className={nftDetailsClassName}>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <Link to={`/user-profile/${userName}`}>
        <div className={`${nftDetailsClassName}__user`}>
          <div className={`${nftDetailsClassName}__avatar`}>{image && <img alt={image.alt} src={image.src} />}</div>
          <div className={`${nftDetailsClassName}__username`} dangerouslySetInnerHTML={{ __html: username }} />
        </div>
      </Link>
    </div>
  );
};

export { NFTDetails };
