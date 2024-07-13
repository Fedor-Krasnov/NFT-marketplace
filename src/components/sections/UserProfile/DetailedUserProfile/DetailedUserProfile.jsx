import React from 'react';
import { Community } from '../../../Footer/Community';
import { Button, IconCode, Statistics } from '../../../units';
import detailedUserProfileStyles from './DetailedUserProfile.module.scss';

const detailedUserProfileClassName = 'detailed-user-profile';

const DetailedUserProfile = ({ content }) => {
  const { userBio, volume, nftSold, followers, name } = content;
  const statistics = [
    {
      title: volume,
      description: 'Volume',
    },
    {
      title: nftSold,
      description: 'NFTs Sold',
    },
    {
      title: followers,
      description: 'Followers',
    },
  ];

  return (
    <div className={detailedUserProfileStyles[detailedUserProfileClassName]}>
      <div className={detailedUserProfileStyles[`${detailedUserProfileClassName}__main-information`]}>
        <div className={detailedUserProfileStyles[`${detailedUserProfileClassName}__user-information`]}>
          <div className={detailedUserProfileStyles[`${detailedUserProfileClassName}__user-main-information`]}>
            <h1
              className={detailedUserProfileStyles[`${detailedUserProfileClassName}__user-name`]}
              dangerouslySetInnerHTML={{ __html: name }}
            />
            <div className={detailedUserProfileStyles[`${detailedUserProfileClassName}__button`]}>
              <Button icon={IconCode.copy} title="0xc03...B79C" />
              <Button
                className={detailedUserProfileStyles[`${detailedUserProfileClassName}__button-purple`]}
                icon={IconCode.plus}
                outline
                title="Follow"
              />
            </div>
          </div>
          <div className={detailedUserProfileStyles[`${detailedUserProfileClassName}__user-description`]}>
            <div className={detailedUserProfileStyles[`${detailedUserProfileClassName}__user-statistic`]}>
              <Statistics
                className={detailedUserProfileStyles[`${detailedUserProfileClassName}__statistic`]}
                statistics={statistics}
              />
            </div>
            <div>
              <div className={detailedUserProfileStyles[`${detailedUserProfileClassName}__bio`]}>Bio</div>
              <p
                className={detailedUserProfileStyles[`${detailedUserProfileClassName}__user-bio`]}
                dangerouslySetInnerHTML={{ __html: userBio }}
              />
            </div>
            <div className={detailedUserProfileStyles[`${detailedUserProfileClassName}__links`]}>
              <div className={detailedUserProfileStyles[`${detailedUserProfileClassName}__user-links`]}>Links</div>
              <Community className={detailedUserProfileStyles[`${detailedUserProfileClassName}__community`]} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={detailedUserProfileStyles[`${detailedUserProfileClassName}__choice-point`]}>
          <div className={detailedUserProfileStyles[`${detailedUserProfileClassName}__trait`]}></div>
          <div className={detailedUserProfileStyles[`${detailedUserProfileClassName}__buttons`]}>
            <a href="src/components/sections/UserProfile/DetailedUserProfile">
              Created<span>302</span>
            </a>
            <a href="src/components/sections/UserProfile/DetailedUserProfile">
              owned<span>67</span>
            </a>
            <a href="src/components/sections/UserProfile/DetailedUserProfile">
              Collection<span>4</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DetailedUserProfile };
