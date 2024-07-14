import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { TabsType } from '../../innerComponents/WorkLayout/types';
import { UserHeader, DetailedUserProfile, WorkLayout } from '../../sections';

const UserProfile = ({ content }) => {
  const { pathname } = useLocation();
  const userName = pathname.replace('/user-profile/', '');
  const userData = content.find((user) => user.userName === userName);

  if (!userData) {
    return <div>Такого пользователя не существует</div>;
  }

  const { name, userId } = userData;

  return (
    <>
      <Helmet>
        <title>{name} – NFT Marketplace</title>
      </Helmet>
      <UserHeader content={userData} />
      <DetailedUserProfile content={userData} />
      <WorkLayout tabsType={TabsType.userProfile} userId={userId} />
    </>
  );
};

export { UserProfile };
