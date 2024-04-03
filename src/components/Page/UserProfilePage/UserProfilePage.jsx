import React from 'react';
import { useParams } from 'react-router-dom';
import { UserProfileSectionPage, DetailedUserProfileSection, WorkLayoutSection } from '../../sections';

const UserProfilePage = () => {
  const { userName } = useParams();

  return (
    <>
      <UserProfileSectionPage />
      <DetailedUserProfileSection />
      <WorkLayoutSection userName={userName} />
    </>
  );
};

export { UserProfilePage };
