import React from 'react';
import { Link } from 'react-router-dom';
import nftDetailsStyles from './NFTDetails.module.scss';

const nftDetailsClassName = 'nft-details';

const NFTDetails = ({ data }) => {
  const { image, title, username, userName } = data;

  return (
    <div className={nftDetailsStyles[nftDetailsClassName]}>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <Link to={`/user-profile/${userName}`}>
        <div className={nftDetailsStyles[`${nftDetailsClassName}__user`]}>
          <div className={nftDetailsStyles[`${nftDetailsClassName}__avatar`]}>
            {image && <img alt={image.alt} src={image.src} />}
          </div>
          <div
            className={nftDetailsStyles[`${nftDetailsClassName}__username`]}
            dangerouslySetInnerHTML={{ __html: username }}
          />
        </div>
      </Link>
    </div>
  );
};

export { NFTDetails };
