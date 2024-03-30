import React from 'react';
import { userProfilePageData } from '../../../mocks/Page';
import { Community } from '../../Footer/Community';
import { Button, IconCode, Statistics } from '../../units';
import detailedUserProfileSectionStyles from './DetailedUserProfileSection.module.scss';

const detailedUserProfileSectionClassName = 'detailed-user-profile-section';

const DetailedUserProfileSection = () => {
  const { statistics, userName, userBio } = userProfilePageData;

  return (
    <div className={detailedUserProfileSectionStyles[detailedUserProfileSectionClassName]}>
      <div className={detailedUserProfileSectionStyles[`${detailedUserProfileSectionClassName}__main-information`]}>
        <div className={detailedUserProfileSectionStyles[`${detailedUserProfileSectionClassName}__user-information`]}>
          <div
            className={
              detailedUserProfileSectionStyles[`${detailedUserProfileSectionClassName}__user-main-information`]
            }
          >
            <h1
              className={detailedUserProfileSectionStyles[`${detailedUserProfileSectionClassName}__user-name`]}
              dangerouslySetInnerHTML={{ __html: userName }}
            />
            <div className={detailedUserProfileSectionStyles[`${detailedUserProfileSectionClassName}__button`]}>
              <Button icon={IconCode.copy} title="0xc03...B79C" />
              <Button
                className={detailedUserProfileSectionStyles[`${detailedUserProfileSectionClassName}__button-purple`]}
                icon={IconCode.plus}
                outline
                title="Follow"
              />
            </div>
          </div>
          <div className={detailedUserProfileSectionStyles[`${detailedUserProfileSectionClassName}__user-description`]}>
            <div className={detailedUserProfileSectionStyles[`${detailedUserProfileSectionClassName}__user-statistic`]}>
              <Statistics
                className={detailedUserProfileSectionStyles[`${detailedUserProfileSectionClassName}__statistic`]}
                statistics={statistics}
              />
            </div>
            <div>
              <div className={detailedUserProfileSectionStyles[`${detailedUserProfileSectionClassName}__bio`]}>Bio</div>
              <p
                className={detailedUserProfileSectionStyles[`${detailedUserProfileSectionClassName}__user-bio`]}
                dangerouslySetInnerHTML={{ __html: userBio }}
              />
            </div>
            <div className={detailedUserProfileSectionStyles[`${detailedUserProfileSectionClassName}__links`]}>
              <div className={detailedUserProfileSectionStyles[`${detailedUserProfileSectionClassName}__user-links`]}>
                Links
              </div>
              <Community
                className={detailedUserProfileSectionStyles[`${detailedUserProfileSectionClassName}__community`]}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={detailedUserProfileSectionStyles[`${detailedUserProfileSectionClassName}__choice-point`]}>
          <div className={detailedUserProfileSectionStyles[`${detailedUserProfileSectionClassName}__trait`]}></div>
          <div className={detailedUserProfileSectionStyles[`${detailedUserProfileSectionClassName}__buttons`]}>
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
