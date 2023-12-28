import React from 'react';
import './UserProfilePage.scss';
import { UserProfileSection, DetailedUserProfileSection } from '../../sections';
import { WorkLayoutSection } from '../../sections/WorkLayoutSection';

const UserProfilePage = () => (
  <>
    <UserProfileSection />
    <DetailedUserProfileSection />
    <WorkLayoutSection />
  </>
);

export { UserProfilePage };
