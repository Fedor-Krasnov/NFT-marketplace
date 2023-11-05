import { useLocation } from 'react-router-dom';

export const pageCheck = () => {
  const { pathname } = useLocation();

  const isMainPage = !pathname.slice(1).length;
  const isAuthPage = pathname === '/authorization';

  return {
    isAuthPage,
    isMainPage,
  };
};
