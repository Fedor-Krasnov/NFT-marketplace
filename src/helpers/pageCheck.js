import { useLocation } from 'react-router-dom';

export const pageCheck = () => {
  const { pathname } = useLocation();

  const isMainPage = !pathname.slice(1).length;
  const isAuthorizationPage = pathname === '/authorization';
  const isUserProfilePage = pathname.includes('/user-profile/');

  return {
    isAuthorizationPage,
    isMainPage,
    isUserProfilePage,
  };
};
