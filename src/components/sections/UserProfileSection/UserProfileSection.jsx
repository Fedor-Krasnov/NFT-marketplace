import React from 'react';
import userProfileSectionStyles from './UserProfileSection.module.scss';

const userProfileSectionClassName = 'user-profile-section';

const UserProfileSection = () => (
  <section className={userProfileSectionStyles[userProfileSectionClassName]}>
    <div className={userProfileSectionStyles[`${userProfileSectionClassName}__background`]} />
    <div className={userProfileSectionStyles[`${userProfileSectionClassName}__avatar-container`]}>
      <div className={userProfileSectionStyles[`${userProfileSectionClassName}__avatar`]}>
        <img alt="" src="/src/assets/media/images/users/square/user-10.png" />
      </div>
    </div>
  </section>
);

export { UserProfileSection };
