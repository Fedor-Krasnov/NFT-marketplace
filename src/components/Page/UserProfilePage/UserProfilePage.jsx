import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { UserProfileSectionPage, DetailedUserProfileSection, WorkLayoutSection } from '../../sections';

const UserProfilePage = () => {
  const { userName } = useParams();

  return (
    <>
      <Helmet>
        <title>{userName !== 'undefined' ? userName : 'UserName'} – NFT Marketplace</title>
      </Helmet>
      <UserProfileSectionPage />
      <DetailedUserProfileSection />
      <WorkLayoutSection userName={userName} />
    </>
  );
};

export { UserProfilePage };
