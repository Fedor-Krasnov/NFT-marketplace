import React from 'react';
import userProfileSectionPageStyles from './UserProfileSectionPage.module.scss';

const userProfileSectionClassName = 'user-profile-section';

const UserProfileSectionPage = () => (
  <section className={userProfileSectionPageStyles[userProfileSectionClassName]}>
    <div className={userProfileSectionPageStyles[`${userProfileSectionClassName}__background`]} />
    <div className={userProfileSectionPageStyles[`${userProfileSectionClassName}__avatar-container`]}>
      <div className={userProfileSectionPageStyles[`${userProfileSectionClassName}__avatar`]}>
        <img alt="" src="/src/assets/media/images/users/square/user-10.png" />
      </div>
    </div>
  </section>
);

export { UserProfileSectionPage };
