import React, { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { PageContext } from '../../../contexts';
import { pages } from '../../../mocks/pages';
import { Page } from '../../Page';

const PageLayout = () => {
  const { pathname } = useLocation();
  const pageData = pages.find((data) => data.pathname === pathname);

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
