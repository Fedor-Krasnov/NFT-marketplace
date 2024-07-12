import React from 'react';
import { Link } from 'react-router-dom';
import { usersData } from '../../../../mocks';
import userListStyles from './UserList.module.scss';

const userListClassName = 'user-list';

const UserList = () => {
  const usersRankings = usersData.slice(0, 15);
  const sortUsers = usersRankings.sort((a, b) => b.nftSold - a.nftSold);

  return (
    <div className={userListStyles[userListClassName]}>
      <div className={userListStyles[`${userListClassName}__list-header`]}>
        <p className={userListStyles[`${userListClassName}__example-1`]}>#</p>
        <p className={userListStyles[`${userListClassName}__example-2`]}>Artist</p>
        <p className={userListStyles[`${userListClassName}__example-3`]}>Change</p>
        <p className={userListStyles[`${userListClassName}__example-4`]}>NFTs&nbsp;Sold</p>
        <p className={userListStyles[`${userListClassName}__example-5`]}>Volume</p>
      </div>
      {sortUsers.map(({ image, userName, name, change, nftSold, volume }, userTopIndex) => (
        <div key={userName} className={userListStyles[`${userListClassName}__creator`]}>
          <div className={userListStyles[`${userListClassName}__creator-container`]}>
            <div className={userListStyles[`${userListClassName}__serial-number`]}>{userTopIndex + 1}</div>
            <div className={userListStyles[`${userListClassName}__artist-details`]}>
              <div className={userListStyles[`${userListClassName}__avatar`]}>
                <img alt={image.alt} src={image.src} />
              </div>
              <p className={userListStyles[`${userListClassName}__name`]} dangerouslySetInnerHTML={{ __html: name }} />
            </div>
            <div
              className={userListStyles[`${userListClassName}__change`]}
              dangerouslySetInnerHTML={{ __html: change }}
            />
            <d
              className={userListStyles[`${userListClassName}__nft-sold`]}
              dangerouslySetInnerHTML={{ __html: nftSold }}
            />
            <div
              className={userListStyles[`${userListClassName}__volume`]}
              dangerouslySetInnerHTML={{ __html: volume }}
            />
          </div>
          <Link to={`/user-profile/${userName}`} />
        </div>
      ))}
    </div>
  );
};

export { UserList };
