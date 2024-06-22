import React, { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { PageContext } from '../../../contexts';
import { pageCheck } from '../../../helpers';
import { pages } from '../../../mocks/pages';
import { Page } from '../../Page';

const PageLayout = () => {
  const { pathname } = useLocation();
  const { isUserProfilePage } = pageCheck();
  let pathnameModified = pathname;
  if (isUserProfilePage) {
    pathnameModified = '/user-profile';
  }
  const pageData = pages.find((data) => data.pathname === pathnameModified);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <PageContext.Provider value={{ pageData }}>
      <Page>
        {pageData ? (
          <>
            <Outlet />
          </>
        ) : (
          'Страница не найдена'
        )}
      </Page>
    </PageContext.Provider>
  );
};

export { PageLayout };
