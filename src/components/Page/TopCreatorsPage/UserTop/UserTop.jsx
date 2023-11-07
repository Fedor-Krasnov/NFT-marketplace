import React from 'react';
import './UserTop.scss';
import { topCreatorsPageData } from '../../../../mocks/Page/index.js';

const UserTop = () => (
  <div>
    {topCreatorsPageData.userTop.map(({ image, userName, change, nftSold, volume }, userTopIndex) => (
      <div key={userName} className="top-creators__creator">
        <div className="top-creators__serial-number">{userTopIndex + 1}</div>
        <div className="top-creators__artist-details">
          <div className="top-creators__avatar">
            <img alt={image.alt} src={image.src} />
          </div>
          <p className="top-creators__name" dangerouslySetInnerHTML={{ __html: userName }} />
        </div>
        <div className="top-creators__change" dangerouslySetInnerHTML={{ __html: change }} />
        <d className="top-creators__nft-sold" dangerouslySetInnerHTML={{ __html: nftSold }} />
        <div className="top-creators__volume" dangerouslySetInnerHTML={{ __html: volume }} />
      </div>
    ))}
  </div>
);

export { UserTop };
