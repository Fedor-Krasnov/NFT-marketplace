import React from 'react';
import './NFTDetails.scss';

const NFTDetails = () => (
  <div className="nft-details">
    <h3>Space Walking</h3>
    <div className="nft-details__user">
      <div className="nft-details__user-avatar">
        <img alt="avatar" src="../../src-old/media/users/user-14.svg" />
      </div>
      <div className="nft-details__user-name">Animakid</div>
    </div>
  </div>
);

export { NFTDetails };
