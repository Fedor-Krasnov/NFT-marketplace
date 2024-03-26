import React from 'react';
import menuStyles from './Menu.module.scss';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../../mocks';

const menuClassName = 'menu';

const Menu = ({ className, isGridRows, isModal }) => {
  const { pathname } = useLocation();

  return (
    <nav
      className={classNames(
        menuStyles[menuClassName],
        {
          [menuStyles[`${menuClassName}_modal`]]: isModal,
          [menuStyles[`${menuClassName}_grid-rows`]]: isGridRows,
        },
        className,
      )}
    >
      <ul>
        {menuData.map(({ path, title }) => {
          if (pathname === path) {
            return null;
          }

          return (
            <li key={path}>
              <Link dangerouslySetInnerHTML={{ __html: title }} to={path} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { Menu };
