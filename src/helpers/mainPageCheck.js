import { useLocation } from 'react-router-dom';

export const mainPageCheck = () => {
  const { pathname } = useLocation();

  return !pathname.slice(1).length;
};
