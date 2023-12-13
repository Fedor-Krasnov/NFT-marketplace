import React from 'react';
import './UserProfilePage.scss';
import { userProfilePageData } from '../../../mocks/Page/index.js';
import { Community } from '../../Footer/Community/index.js';
import { Button, IconCode, Statistics } from '../../units/index.js';

const UserProfilePage = () => {
  const { banner, statistics, userAvatar, userName, userBio } = userProfilePageData;

  return (
    <div className="user-profile">
      <div className="user-profile__container">
        <div className="user-profile__main-information">
          <div className="user-profile__banner">
            <img src="../src/assets/media/images/banners/user-banner-1.jpg" />
            <div className="user-profile__avatar">
              {/* <img src="../src/assets/media/images/users/nft-card-UserProfilePage/user-page-1.svg" />*/}
            </div>
          </div>
          <div className="user-profile__user-information">
            <div className="user-profile__user-main-information">
              <h1 className="user-profile__user-name" dangerouslySetInnerHTML={{ __html: userName }} />
              <div className="user-profile__buttom">
                <Button icon={IconCode.copy} title="0xc03...B79C" />
                <Button icon={IconCode.plus} outline title="Follow" />
              </div>
            </div>
            <div className="user-profile__user-description">
              <div className="user-profile__user-statistic">
                <Statistics className="user-profile__statistic" statistics={statistics} />
              </div>
              <div>
                <div className="user-profile__bio">Bio</div>
                <p className="user-profile__user-bio" dangerouslySetInnerHTML={{ __html: userBio }} />
              </div>
              <div className="user-profile__links">
                <div className="user-profile__user-links">Links</div>
                <Community className="user-profile__community" />
              </div>
            </div>
          </div>
          <div>
            <div className="user-profile__choice-point">
              <div className="user-profile__trait"></div>
              <div className="user-profile__buttons">
                <a href="">
                  Created<span>302</span>
                </a>
                <a href="">
                  owned<span>67</span>
                </a>
                <a href="">
                  Collection<span>4</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { UserProfilePage };
