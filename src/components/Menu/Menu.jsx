import React from 'react';
import './Menu.scss';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../../mocks';

const Menu = ({ className, isGridRows, isModal }) => {
  const { pathname } = useLocation();

  return (
    <nav
      className={classNames(
        'menu',
        {
          menu_modal: isModal,
          'menu_grid-rows': isGridRows,
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
