import React from 'react';
import './UserProfileSection.scss';

const UserProfileSection = () => {
  console.log();

  return (
    <section className="user-profile-section">
      <div className="user-profile-section__background" />
      <div className="user-profile-section__avatar-container">
        <div className="user-profile-section__avatar">
          <img alt="" src="../src/assets/media/images/users/square/user-10.png" />
        </div>
      </div>
    </section>
  );
};

export { UserProfileSection };
