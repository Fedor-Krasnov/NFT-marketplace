import React from 'react';
import './UserProfileSection.scss';

const userProfileSectionClassName = 'user-profile-section';

const UserProfileSection = () => (
  <section className={userProfileSectionClassName}>
    <div className={`${userProfileSectionClassName}__background`} />
    <div className={`${userProfileSectionClassName}__avatar-container`}>
      <div className={`${userProfileSectionClassName}__avatar`}>
        <img alt="" src="../src/assets/media/images/users/square/user-10.png" />
      </div>
    </div>
  </section>
);

export { UserProfileSection };
