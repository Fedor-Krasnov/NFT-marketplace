import React from 'react';
import './UserProfilePage.scss';
import { useParams } from 'react-router-dom';
import { UserProfileSection, DetailedUserProfileSection } from '../../sections';
import { WorkLayoutSection } from '../../sections/WorkLayoutSection';

const UserProfilePage = () => {
  const { userName } = useParams();

  return (
    <>
      <UserProfileSection />
      <DetailedUserProfileSection />
      <WorkLayoutSection userName={userName} />
    </>
  );
};

export { UserProfilePage };
