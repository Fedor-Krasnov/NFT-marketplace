import React from 'react';
import { userProfilePageData } from '../../../../mocks/Page/index.js';
import userProfileSectionPageStyles from './UserProfileSectionPage.module.scss';

const userProfileSectionClassName = 'user-profile-section';

const UserProfileSectionPage = () => {
  const { background } = userProfilePageData;

  return (
    <section className={userProfileSectionPageStyles[userProfileSectionClassName]}>
      <div
        className={userProfileSectionPageStyles[`${userProfileSectionClassName}__background`]}
        style={{ '--background': `url(${background.src}) no-repeat center` }}
      />
      <div className={userProfileSectionPageStyles[`${userProfileSectionClassName}__avatar-container`]}>
        <div className={userProfileSectionPageStyles[`${userProfileSectionClassName}__avatar`]}>
          <img alt="" src="/src/mocks/media/users/square/user-10.png" />
        </div>
      </div>
    </section>
  );
};

export { UserProfileSectionPage };
