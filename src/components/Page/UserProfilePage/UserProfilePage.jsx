import React from 'react';
import { useParams } from 'react-router-dom';
import { UserProfileSection, DetailedUserProfileSection, WorkLayoutSection } from '../../sections';

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
