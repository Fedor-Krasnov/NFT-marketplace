import React from 'react';
import './HeaderMenu.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { headerMenuData } from '../../../mocks/headerMenuData.js';

const HeaderMenu = ({ className, isGridRows, isModal }) => (
  <nav
    className={classNames(
      'header-menu',
      {
        'header-menu_modal': isModal,
        'header-menu_grid-rows': isGridRows,
      },
      className,
    )}
  >
    <ul>
      {headerMenuData.map(({ path, title }) => (
        <li key={path}>
          <Link dangerouslySetInnerHTML={{ __html: title }} to={path} />
        </li>
      ))}
    </ul>
  </nav>
);

export { HeaderMenu };
