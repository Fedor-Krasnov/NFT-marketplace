import React from 'react';
import './DetailedUserProfileSection.scss';
import { userProfilePageData } from '../../../mocks/Page';
import { Community } from '../../Footer/Community';
import { Button, IconCode, Statistics } from '../../units';

const detailedUserProfileSectionClassName = 'detailed-user-profile-section';

const DetailedUserProfileSection = () => {
  const { statistics, userName, userBio } = userProfilePageData;

  return (
    <div className={detailedUserProfileSectionClassName}>
      <div className={`${detailedUserProfileSectionClassName}__main-information`}>
        <div className={`${detailedUserProfileSectionClassName}__user-information`}>
          <div className={`${detailedUserProfileSectionClassName}__user-main-information`}>
            <h1
              className={`${detailedUserProfileSectionClassName}__user-name`}
              dangerouslySetInnerHTML={{ __html: userName }}
            />
            <div className={`${detailedUserProfileSectionClassName}__button`}>
              <Button icon={IconCode.copy} title="0xc03...B79C" />
              <Button
                className={`${detailedUserProfileSectionClassName}__button-purple`}
                icon={IconCode.plus}
                outline
                title="Follow"
              />
            </div>
          </div>
          <div className={`${detailedUserProfileSectionClassName}__user-description`}>
            <div className={`${detailedUserProfileSectionClassName}__user-statistic`}>
              <Statistics className={`${detailedUserProfileSectionClassName}__statistic`} statistics={statistics} />
            </div>
            <div>
              <div className={`${detailedUserProfileSectionClassName}__bio`}>Bio</div>
              <p
                className={`${detailedUserProfileSectionClassName}__user-bio`}
                dangerouslySetInnerHTML={{ __html: userBio }}
              />
            </div>
            <div className={`${detailedUserProfileSectionClassName}__links`}>
              <div className={`${detailedUserProfileSectionClassName}__user-links`}>Links</div>
              <Community className={`${detailedUserProfileSectionClassName}__community`} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`${detailedUserProfileSectionClassName}__choice-point`}>
          <div className={`${detailedUserProfileSectionClassName}__trait`}></div>
          <div className={`${detailedUserProfileSectionClassName}__buttons`}>
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
  );
};

export { DetailedUserProfileSection };
